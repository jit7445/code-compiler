// Output.tsx
'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { executeCode } from "@/app/api/execute/route";
import { LANGUAGE_VERSIONS } from "@/lib/constant";
// import * as monaco from "monaco-editor";

interface OutputProps {
  setCode: (code: string) => void;
  code: string;
  language: keyof typeof LANGUAGE_VERSIONS;
}

const Output: React.FC<OutputProps> = ({ setCode, code, language}) => {
  const [output, setOutput] = useState<string>("");
    // console.log("codeREf:",)
  const handleClear = () => {
    setCode(" ");
  };
  // console.log("code:::", code);

  const handleExecute = async () => {
       
    
      console.log("code::::",code);
      console.log("language:",language);
      try {
        const result = await executeCode(language, code);
        setOutput(result?.run?.stdout || ""); // Display the output from API response
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setOutput("Error executing code");
      }
   
  };

  return (
    <div className="flex flex-col w-full border-2 border-slate-100 p-4">
      <div className="flex flex-row justify-between items-center mb-2">
        <h1 className="text-lg font-semibold text-white">Output</h1>
        <div className="flex space-x-2">
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md"
            onClick={handleExecute}
          >
            Run
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className="text-white bg-gray-800 p-4 rounded-lg h-48 overflow-y-auto">
        {output || "Output will be shown here..."}
      </div>
    </div>
  );
};

export default Output;
