import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
                {/* <Header /> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
