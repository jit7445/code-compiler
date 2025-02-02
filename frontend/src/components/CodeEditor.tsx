// // Page.tsx
// import React, { useState, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Output from "@/components/Output";
// import { CODE_SNIPPETS } from "@/lib/constant";
// import { Editor } from "@monaco-editor/react";
// import * as monaco from "monaco-editor";

// const Page: React.FC = () => {
//   const pathname = usePathname();
//   const language = (pathname.split("/").pop() as keyof typeof CODE_SNIPPETS) || "javascript"; 
//   const [code, setCode] = useState<string>(CODE_SNIPPETS[language]);
//   const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

//   const handleEditorMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
//     editorRef.current = editor;
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Editor
//         height="75vh"
//         theme="vs-dark"
//         language={language}
//         defaultValue={CODE_SNIPPETS[language]}
//         options={{
//           minimap: { enabled: false },
//         }}
//         onMount={handleEditorMount}
//         value={code}
//         onChange={(value) => setCode(value || "")}
//       />
//       <div className="flex-1 p-4 bg-gray-800">
//         <Output setCode={setCode} code={code} language={language} />
//       </div>
//     </div>
//   );
// };

// export default Page;
