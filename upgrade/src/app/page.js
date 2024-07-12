
"use client"
import Image from "next/image";
import Navigation from "@/components/Navigation";
import BentoGrid from "@/components/BentoGrid";


export default function Home() {
  return (
    <div className="bg-zinc-50">
      <Navigation />

      <main className="">
        <BentoGrid />
      </main>
    </div>
  );
}

