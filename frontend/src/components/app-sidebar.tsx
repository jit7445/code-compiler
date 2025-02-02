'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,

} from "@/components/ui/sidebar"
import Image from "next/image";
import { SiPython, SiCplusplus, SiC, SiRuby, SiPhp, SiGo, SiRust } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";



// import { FiSettings } from "react-icons/fi"
// import { AiOutlineJavaScript } from "react-icons/ai";
// import { FaJava } from "react-icons/fa6";
// import { IoLogoJavascript } from "react-icons/io";
// import { Icon } from "lucide-react";

// Menu items.
const items = [
  {
    title: "node",
    url: "/codeditor/javascript",
    icon: IoLogoJavascript,
    language: "javascript",
    version: "18.15.0",
    aliases: ["node-javascript", "node-js", "javascript", "js"],
    runtime: "node",
  },
  {
    title: "PHP",
    url: "/codeditor/php",
    icon: SiPhp,
    language: "php",
    version: "8.2.3",
    aliases: [],
  },
  {
    title: "Python",
    url: "/codeditor/python",
    icon: SiPython,
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  {
    title: "Ruby",
    url: "/codeditor/ruby",
    icon: SiRuby,
    language: "ruby",
    version: "3.0.1",
    aliases: ["ruby3", "rb"],
  },
  {
    title: "Rust",
    url: "/codeditor/rust",
    icon: SiRust,
    language: "rust",
    version: "1.68.2",
    aliases: ["rs"],
  },
  {
    title: "C#",
    url: "/codeditor/csharp",
    icon: FiSettings, // Replace with C# icon if available
    language: "csharp",
    version: "6.12.0",
    aliases: ["mono", "mono-csharp", "mono-c#", "mono-cs", "c#", "cs"],
    runtime: "mono",
  },
  {
    title: "cpp",
    url: "/codeditor/cpp",
    icon: SiCplusplus,
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  {
    title: "Go",
    url: "/codeditor/go",
    icon: SiGo,
    language: "go",
    version: "1.16.2",
    aliases: ["go", "golang"],
  },
  {
    title: "Java",
    url: "/codeditor/java",
    icon: FaJava,
    language: "java",
    version: "15.0.2",
    aliases: [],
  },
  {
    title: "C",
    url: "/codeditor/c",
    icon: SiC,
    language: "c",
    version: "10.2.0",
    aliases: ["gcc"],
    runtime: "gcc",
  },
  {
    title: "Settings",
    url: "/codeditor/settings",
    icon: FiSettings,
  },
];

export function AppSidebar() {
  return (
   
    <Sidebar collapsible="icon">
       <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
      <SidebarMenuButton asChild>
                    <a href="/codeditor" className="flex items-center txt-xl gap-2">
                      <Image src="/assets/image/logocodemining.webp" alt="logo" className='h-full'  width={50}
       height={50}></Image>
                      <span>Codemining</span>
                    </a>
                  </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl">Language</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="text-">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center  gap-2">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
   
  )
}
