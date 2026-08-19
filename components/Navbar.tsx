"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";




export default function Navbar() {
  const [menu, setMenu] = useState<string | null>(null);
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-4 md:px-12">
      <a href="/" className="text-3xl font-semibold  tracking-[0.3em]">
        STUDIOZ.
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <a href="/" className="text-2xl tracking-widest transition-opacity hover:opacity-50">
          Home
        </a>
        <a href="/about" className="text-2xl tracking-widest transition-opacity hover:opacity-50">
          About
        </a>
        {/* Projects */}
        <div className="relative">
          <button onClick={() => setMenu(menu === "projects" ? null : "projects")}
            className="text-2xl tracking-widest"
          >
            Projects +
          </button>
          {menu === "projects" && (
            <div className="absolute left-0 top-10 z-20 w-48 border border-gray-800 bg-[#050505] p-4">
              <a href="#" className="block py-2 hover:opacity-50">
                All Projects
              </a>
              <a href="#" className="block py-2 hover:opacity-50">
                Residential
              </a>
              <a href="#" className="block py-2 hover:opacity-50">
                Commercial
              </a>
            </div>
          )}
        </div>
        {/* Services  */}

        <div className="relative">
          <button onClick={() => setMenu(menu === "services" ? null : "services")}
            className="text-2xl tracking-widest">
            Services +
          </button>
          {menu === "services" && (
            <div className="absolute left-0 top-10 z-20 w-52 border border-gray-800 bg-[#050505] p-4">
              <a href="#" className="block py-2 hover:opacity-50">
                Architecture
              </a>
              <a href="#" className="block py-2 hover:opacity-50">
                Interior Design
              </a>
              <a href="#" className="block py-2 hover:opacity-50">
                Space Planning
              </a>
              <a href="#" className="block py-2 hover:opacity-50">
                Renovation
              </a>
            </div>
          )}
        </div>


        <a href="/contact" className="text-2xl tracking-widest transition-opacity hover:opacity-50">
          Contact
        </a>

      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger
          render={
            <button className="text-lg tracking-widest md:hidden" />
          }
        >
          Menu
        </SheetTrigger>

        <SheetContent className="bg-[#050505] text-white border-gray-600">
          <div className="mt-10 flex flex-col gap-6">
            <a href="/" className="text-2xl transition-opacity hover:opacity-50">Home</a>
            <a href="/about" className="text-2xl transition-opacity hover:opacity-50">About</a>
            <a href="#" className="text-2xl transition-opacity hover:opacity-50">Projects</a>
            <a href="#" className="text-2xl transition-opacity hover:opacity-50">Services</a>
            <a href="/contact" className="text-2xl transition-opacity hover:opacity-50">Contact</a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}