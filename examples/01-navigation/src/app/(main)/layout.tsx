import React from "react";
import Header from "../ui/header";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header />
        <div className="flex">
            {children}
        </div>
        </>
    )

}