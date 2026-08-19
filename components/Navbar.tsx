"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";




export default function Navbar() {
  const [menu, setMenu] = useState<string | null>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeMenu(event: PointerEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setMenu(null);
      }
    }

    document.addEventListener("pointerdown", closeMenu);
    return () => document.removeEventListener("pointerdown", closeMenu);
  }, []);

  return (
    <nav ref={navbarRef} className="flex min-h-24 items-center justify-between border-b border-gray-800 px-6 py-6 md:px-12">
      <Link href="/" className="brand-mark group font-heading text-4xl font-medium tracking-[0.18em] transition-opacity hover:opacity-60 md:text-5xl">
        STUDIO<span className="transition-colors duration-300 group-hover:text-[#d6b36a]">Z.</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <Link href="/" className="nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50">
          Home
        </Link>
        <Link href="/about" className="nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50">
          About
        </Link>
        {/* Projects */}
        <div className="relative">
          <button
            onClick={() => setMenu(menu === "projects" ? null : "projects")}
            aria-expanded={menu === "projects"}
            className="nav-trigger group flex items-center gap-2 font-heading text-xl italic transition-colors hover:text-gray-400"
          >
            Projects <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">+</span>
          </button>
          {menu === "projects" && (
            <div className="absolute left-0 top-10 z-20 w-48 border border-gray-800 bg-[#050505] p-4">
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                All Projects
              </a>
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Residential
              </a>
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Commercial
              </a>
            </div>
          )}
        </div>
        {/* Services  */}

        <div className="relative">
          <button
            onClick={() => setMenu(menu === "services" ? null : "services")}
            aria-expanded={menu === "services"}
            className="nav-trigger group flex items-center gap-2 font-heading text-xl italic transition-colors hover:text-gray-400"
          >
            Services <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">+</span>
          </button>
          {menu === "services" && (
            <div className="absolute left-0 top-10 z-20 w-52 border border-gray-800 bg-[#050505] p-4">
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Architecture
              </a>
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Interior Design
              </a>
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Space Planning
              </a>
              <a href="#" onClick={() => setMenu(null)} className="block py-2 hover:opacity-50">
                Renovation
              </a>
            </div>
          )}
        </div>


        <Link href="/contact" className="nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50">
          Contact
        </Link>

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
            <Link href="/" className="text-2xl transition-opacity hover:opacity-50">Home</Link>
            <Link href="/about" className="text-2xl transition-opacity hover:opacity-50">About</Link>
            <a href="#" className="text-2xl transition-opacity hover:opacity-50">Projects</a>
            <a href="#" className="text-2xl transition-opacity hover:opacity-50">Services</a>
            <Link href="/contact" className="text-2xl transition-opacity hover:opacity-50">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}