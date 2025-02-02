import { SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

// import { Head } from "next/document";
// import Header from '@/components/Header';
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex flex-row min-h-screen">
        <AppSidebar />
        <main className="flex-grow">
          <div className="flex flex-col min-h-screen p-4 bg-gray-100 dark:bg-zinc-900">
            <Navbar />
            <div className="flex-grow w-full mt-4 rounded-lg shadow-lg p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
