import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/redux/Provider";
import { Toaster } from "react-hot-toast";

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
        <body className="bg-foundation text-black">
          {children}
          <Toaster />
        </body>
      </html>
    </ReduxProvider>
  );
}
