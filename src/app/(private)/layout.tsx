import { AuthWrapper } from "@/components/AuthComponent";
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
    <AuthWrapper>
      <main className=" w-full bg-white flex flex-wrap justify-between relative ">
        <TheSidebar />
        {children}
        <div className="banner-promote sticky flex items-center justify-center top-[20px] right-[30px] w-[150px] h-[350px] bg-[#ccc]">
          <h5>Реклама</h5>
        </div>
      </main>
    </AuthWrapper>
  );
}

