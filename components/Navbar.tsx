"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight, MenuIcon } from "lucide-react";




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
            <button
              aria-label="Open navigation menu"
              className="group flex items-center gap-3 border border-gray-700 px-4 py-3 text-xs uppercase tracking-[0.22em] transition-colors hover:border-[#d6b36a] hover:text-[#d6b36a] md:hidden"
            />
          }
        >
          <MenuIcon className="size-4 transition-transform duration-300 group-hover:rotate-90" />
          <span>Menu</span>
        </SheetTrigger>

        <SheetContent className="w-[min(88vw,28rem)] border-gray-800 bg-[#050505] px-6 py-8 text-white sm:max-w-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-6 pr-12">
            <Link href="/" className="font-heading text-2xl tracking-[0.16em]">
              STUDIO<span className="text-[#d6b36a]">Z.</span>
            </Link>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Navigation
            </p>
          </div>

          <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
            <SheetClose nativeButton={false}
              render={
                <Link
                  href="/"
                  className="group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl"
                />
              }
            >
              <span>Home</span>
              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
            <SheetClose nativeButton={false}
              render={
                <Link
                  href="/about"
                  className="group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl"
                />
              }
            >
              <span>About</span>
              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
            <SheetClose nativeButton={false}
              render={
                <Link
                  href="#projects"
                  className="group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl"
                />
              }
            >
              <span>Projects</span>
              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
            <SheetClose nativeButton={false}
              render={
                <Link
                  href="#services"
                  className="group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl"
                />
              }
            >
              <span>Services</span>
              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
            <SheetClose nativeButton={false}
              render={
                <Link
                  href="/contact"
                  className="group flex items-center justify-between py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl"
                />
              }
            >
              <span>Contact</span>
              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
          </nav>

          <div className="mt-auto border-t border-gray-800 pt-6 text-sm leading-relaxed text-gray-500">
            <p>Mumbai, India</p>
            <a href="mailto:hello@studioz.com" className="transition-colors hover:text-[#d6b36a]">
              hello@studioz.com
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}