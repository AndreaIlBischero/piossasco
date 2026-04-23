import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "C'era una volta a Piossasco",
  description: "Un progetto locale dedicato a Piossasco"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <SiteHeader />
        <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
