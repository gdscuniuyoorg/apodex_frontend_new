import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="bg-[#E9EFF4]">{children}</body>
      </html>
    </StoreProvider>
  );
}
