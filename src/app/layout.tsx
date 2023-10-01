import TanstackProvider from "@/providers/TanstackProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Template } from "@/components/template.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chunches cuerna",
  description: "Sales management ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <TanstackProvider>
          <Template>{children}</Template>
        </TanstackProvider>
      </body>
    </html>
  );
}
