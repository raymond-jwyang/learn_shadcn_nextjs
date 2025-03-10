import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "../ui/app-sidebar";


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <SidebarProvider>
            <AppSidebar />

            <main>
                <SidebarTrigger />
                {children}
            </main>
            
        </SidebarProvider>
        </>
    )
}