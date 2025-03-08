import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "01-navigation",
  description: "Exercise ShadCN navigation component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
