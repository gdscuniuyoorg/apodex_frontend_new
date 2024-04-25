import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/redux/Provider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Apodex",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className="bg-lightBlue-100/[50%] text-black">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Toaster />
          </Suspense>
        </body>
      </html>
    </ReduxProvider>
  );
}
