import { TheSidebar } from "@/components/TheSidebar/TheSidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ФСМБ",
  description: "ФЕДЕРАЦИЯ СОВРЕМЕННОГО МЕЧЕВОГО БОЯ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <TheSidebar />
      <main className="ml-12 w-full bg-white flex-1 overflow-y-auto min-h h-full relative pt-16">
        {children}
      </main>
    </div>
  );
}
