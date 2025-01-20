const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

const images = {
  python: "python:3.13.0rc2-alpine3.20",
  node: "node:22-alpine3.19",
  ruby: "ruby:3.2-alpine",
  cpp: "gcc:12", // Using a valid GCC image
};

app.post("/execute", (req, res) => {
  const { language, code } = req.body;
  const image = images[language];

  if (!image) {
    return res.status(400).send({ error: "Unsupported language" });
  }

  // Escape double quotes in C++ code
  const escapedCode = code.replace(/"/g, '\\"');
  const command = `echo "${escapedCode}" | docker run --rm -i ${image} sh -c "cat > temp.${getFileExtension(language)} && ${getRunCommand(language)}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send({ error: stderr });
    }
    res.send({ output: stdout });
  });
});

function getFileExtension(language) {
  switch (language) {
    case "python":
      return "py";
    case "node":
      return "js";
    case "ruby":
      return "rb";
    case "cpp":
      return "cpp";
    default:
      return "";
  }
}

function getRunCommand(language) {
  switch (language) {
    case "python":
      return "python temp.py";
    case "node":
      return "node temp.js";
    case "ruby":
      return "ruby temp.rb";
    case "cpp":
      return "g++ temp.cpp -o temp.out && ./temp.out";
    default:
      return "";
  }
}

const prePullDockerImages = async () => {
  const pullPromises = Object.values(images).map(image => {
    return new Promise((resolve, reject) => {
      exec(`docker pull ${image}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error pulling image ${image}:`, stderr);
          reject(error);
        } else {
          console.log(`Pulled image ${image}:`, stdout);
          resolve();
        }
      });
    });
  });

  await Promise.all(pullPromises);
  console.log("All images pulled successfully!");
};

// Start your server
const startServer = async () => {
  await prePullDockerImages();
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

// Initialize the application
startServer();
