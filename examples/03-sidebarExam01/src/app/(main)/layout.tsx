import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import AppSidebar from "../ui/app-sidebar";
import { cookies } from "next/headers";


export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies()
    // See SIDEBAR_COOKEIE_NAME in the components/ui/sidebar.tsx file for "sidebar_state" name
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <>
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />

            <main>
                <SidebarTrigger />
                {children}
            </main>
            
        </SidebarProvider>
        </>
    )
}