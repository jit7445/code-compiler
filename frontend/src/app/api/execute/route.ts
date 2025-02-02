// Assuming LANGUAGE_VERSIONS is defined in the same file or imported
import { LANGUAGE_VERSIONS } from "@/lib/constant";
import axios from "axios";
const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language: keyof typeof LANGUAGE_VERSIONS, sourceCode: string) => {
  console.log("resques:")
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
