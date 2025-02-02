import { CodeSnippetsProps } from "@/app/codeditor/[id]/page"

export const languageOptions = [
  {
    language: "node",
    version: "18.15.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
  },
  {
    language: "php",
    version: "8.2.3",
    aliases: [],
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  {
    language: "ruby",
    version: "3.0.1",
    aliases: ["ruby3", "rb"],
  },
  {
    language: "rust",
    version: "1.68.2",
    aliases: ["rs"],
  },
  {
    language: "csharp",
    version: "6.12.0",
    aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
    runtime: "mono",
  },
  {
    language: "cpp",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    language: "go",
    version: "1.16.2",
    aliases: ["go", "golang"],
  },
  {
    language: "java",
    version: "15.0.2",
    aliases: [],
  },
  {
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
  },
];

export const codeSnippets: CodeSnippetsProps = {
  javascript: `// Function to add two numbers
function sum(a, b) {
  return a + b;
}
// Test the function
console.log(sum(3, 4)); // Output: 7`,

  typescript: `// Function to add two numbers with type annotations
function sum(a: number, b: number): number {
  return a + b;
}
// Test the function
console.log(sum(3, 4)); // Output: 7`,

  php: `<?php
// Function to add two numbers
function sum($a, $b) {
  return $a + $b;
}
// Test the function
echo sum(3, 4); // Output: 7`,

  python: `# Function to add two numbers
def sum(a, b):
    return a + b
# Test the function
print(sum(3, 4)) # Output: 7`,

  ruby: `# Function to add two numbers
def sum(a, b)
  a + b
end
# Test the function
puts sum(3, 4) # Output: 7`,

  rust: `// Function to add two numbers
fn sum(a: i32, b: i32) -> i32 {
  a + b
}
// Test the function
fn main() {
  println!("{}", sum(3, 4)); // Output: 7
}`,

  "csharp.net": `// Class and function to add two numbers
public class Program
{
    public static int Sum(int a, int b)
    {
        return a + b;
    }
}
// Test the function
class MainClass
{
    public static void Main (string[] args)
    {
        Console.WriteLine(Program.Sum(3, 4)); // Output: 7
    }
}`,

  "cpp": `#include <iostream>
// Function to add two numbers
int sum(int a, int b) {
  return a + b;
}
// Test the function
int main() {
  std::cout << sum(3, 4); // Output: 7
  return 0;
}`,

  go: `package main
import "fmt"

// Function to add two numbers
func sum(a, b int) int {
  return a + b
}

// Test the function
func main() {
  fmt.Println(sum(3, 4)) // Output: 7
}`,

  java: `// Class and function to add two numbers
public class Main {
    public static int sum(int a, int b) {
        return a + b;
    }
    // Test the function
    public static void main(String[] args) {
        System.out.println(sum(3, 4)); // Output: 7
    }
}`,

  c: `#include <stdio.h>
// Function to add two numbers
int sum(int a, int b) {
  return a + b;
}
// Test the function
int main() {
  printf("%d", sum(3, 4)); // Output: 7
  return 0;
}`
};
