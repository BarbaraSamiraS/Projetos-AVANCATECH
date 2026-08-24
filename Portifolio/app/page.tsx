import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-gray-200 flex flex-1 h-60 justify-center items-center gap-4">
          
          <div className="w-1/2 text-black">
            <h1 className="text-lg font-bold bg-blue-500 border border-dashed border-2 p-2 w-1/2">Sobre Mim</h1>
            <p className="text-base">Olá! Meu nome é John Doe e sou um desenvolvedor full-stack. Meu nome é John Doe e sou um desenvolvedor full-stack.</p>
          </div>
      </div>
      <Footer></Footer>
    </>
  );
}
