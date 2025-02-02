
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import Button from "@/components/Button";
import { Loader, Play, TriangleAlert } from "lucide-react";
import { codeSnippets, languageOptions } from "@/config/config";
// import { compileCode } from "@/actions/compile";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import axios from "axios";
export default function EditorComponent() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [sourceCode, setSourceCode] = useState(codeSnippets["javascript"]);
  const [languageOption, setLanguageOption] = useState(languageOptions[0]);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState([]);
  const [err, setErr] = useState(false);

  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
    editor.focus();
  }

  function handleOnChange(value: string | undefined) {
    if (value) {
      setSourceCode(value);
    }
  }

  async function executeCode() {
    setLoading(true);

    try {
      const result =  await fetch('http://localhost:3000/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: languageOption.language,
          code: sourceCode,
        }),
      });
      const data= await result.json();
      console.log("requlst:",data);
      if(result.ok){
        setOutput(data.output.split("\n"));
      }
      else{
        setOutput(data.error.split("\n"));
      }
      setLoading(false);
      setErr(false);
      toast.success("Compiled Successfully");
    } catch (error) {
      setErr(true);
      setLoading(false);
      toast.error("Failed to compile the Code");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
      {/* EDITOR HEADER */}
      {/* <div className="flex items-center justify-between pb-3">
         
        <Button className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          {languageOption.language}
        </Button>
      </div> */}
      {/* EDITOR */}
      <div className="bg-slate-400 dark:bg-slate-950 p-3 rounded-2xl">
        
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border dark:bg-slate-900"
        >
        
          <ResizablePanel defaultSize={50} minSize={35}>
          {/* <Navbar/> */}
            <Editor
              theme={theme === "dark" ? "vs-dark" : "vs-light"}
              height="100vh"
              defaultLanguage={languageOption.language}
              defaultValue={sourceCode}
              onMount={handleEditorDidMount}
              value={sourceCode}
              onChange={handleOnChange}
              language={languageOption.language}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={35}>
            {/* Output */}
            <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-screen">
              <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                <h2>Output</h2>
                {loading ? (
                  <Button
                    disabled
                    
                    className="dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900"
                  >
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                    <span>Running please wait...</span>
                  </Button>
                ) : (
                  <Button
                    onClick={executeCode}
                   
                    className="dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    <span>Run</span>
                  </Button>
                )}
              </div>
              <div className="px-6 space-y-2">
                {err ? (
                  <div className="flex items-center space-x-2 text-red-500 border border-red-600 px-6 py-6">
                    <TriangleAlert className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-xs">
                      Failed to Compile the Code, Please try again!
                    </p>
                  </div>
                ) : (
                  output.map((item, index) => (
                    <p className="text-sm" key={index}>
                      {item}
                    </p>
                  ))
                )}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
