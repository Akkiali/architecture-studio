"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowUpRight, MenuIcon } from "lucide-react";

function getActiveItem(pathname: string) {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/news")) return "news";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export default function Navbar() {
  const [menu, setMenu] = useState<string | null>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(() => getActiveItem(pathname));

  const activeClass = "rounded-full bg-[#d6b36a] px-4 py-2 font-semibold text-black";

  useEffect(() => {
    setActiveItem(getActiveItem(pathname));
  }, [pathname]);

  useEffect(() => {
    function closeMenu(event: PointerEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenu(null);
      }
    }

    document.addEventListener("pointerdown", closeMenu);

    return () => document.removeEventListener("pointerdown", closeMenu);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-50 flex min-h-28 items-center justify-between border-b border-gray-800 bg-[#050505] px-6 py-6 md:px-12"
    >
      {/* LEFT DESKTOP NAVIGATION */}
      <div className="hidden flex-1 items-center justify-end gap-8 pr-10 md:flex">
        <Link
          href="/"
          onClick={() => setActiveItem("home")}
          className={`nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${activeItem === "home" ? activeClass : ""}`}
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={() => setActiveItem("about")}
          className={`nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${activeItem === "about" ? activeClass : ""}`}
        >
          About Us
        </Link>

        {/* SERVICES DROPDOWN */}
        <div className="relative">
          <button
            onClick={() =>
            (setMenu(menu === "services" ? null : "services"),
              setActiveItem("services"))
            }
            aria-expanded={menu === "services"}
            className={`nav-trigger group flex items-center gap-2 font-heading text-xl italic transition-colors hover:text-gray-400 ${activeItem === "services" ? activeClass : ""}`}
          >
            Services

            <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">
              +
            </span>
          </button>

          {menu === "services" && (
            <div className="absolute left-0 top-10 z-20 w-52 border border-gray-800 bg-[#050505] p-4">
              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Architecture
              </a>

              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Interior Design
              </a>

              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Space Planning
              </a>

              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Renovation
              </a>
            </div>
          )}
        </div>
      </div>

      {/* CENTER LOGO */}
      <Link
        href="/"
        className="brand-mark group shrink-0 font-heading text-4xl font-medium tracking-[0.18em] transition-opacity hover:opacity-60 md:text-5xl"
      >
        STUDIO
        <span className="transition-colors duration-300 group-hover:text-[#d6b36a]">
          Z.
        </span>
      </Link>

      {/* RIGHT DESKTOP NAVIGATION */}
      <div className="hidden flex-1 items-center justify-start gap-8 pl-10 md:flex">
        {/* PROJECTS / PORTFOLIO DROPDOWN */}
        <div className="relative">
          <button
            onClick={() =>
            (setMenu(menu === "projects" ? null : "projects"),
              setActiveItem("portfolio"))
            }
            aria-expanded={menu === "projects"}
            className={`nav-trigger group flex items-center gap-2 font-heading text-xl italic transition-colors hover:text-gray-400 ${activeItem === "portfolio" ? activeClass : ""}`}
          >
            Portfolio

            <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">
              +
            </span>
          </button>

          {menu === "projects" && (
            <div className="absolute right-0 top-10 z-20 w-48 border border-gray-800 bg-[#050505] p-4">
              <a
                href="#projects"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                All Projects
              </a>

              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Residential
              </a>

              <a
                href="#"
                onClick={() => setMenu(null)}
                className="block py-2 hover:opacity-50"
              >
                Commercial
              </a>
            </div>
          )}
        </div>

        <Link
          href="/news"
          onClick={() => setActiveItem("news")}
          className={`nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${activeItem === "news" ? activeClass : ""}`}
        >
          News
        </Link>

        <Link
          href="/contact"
          onClick={() => setActiveItem("contact")}
          className={`nav-link text-lg uppercase tracking-[0.2em] transition-opacity hover:opacity-50 ${activeItem === "contact" ? activeClass : ""}`}
        >
          Contact
        </Link>
      </div>

      {/* MOBILE NAVIGATION */}
      <Sheet>
        <SheetTrigger
          render={
            <button
              aria-label="Open navigation menu"
              className="group ml-auto flex items-center gap-3 border border-gray-700 px-4 py-3 text-xs uppercase tracking-[0.22em] transition-colors hover:border-[#d6b36a] hover:text-[#d6b36a] md:hidden"
            />
          }
        >
          <MenuIcon className="size-4 transition-transform duration-300 group-hover:rotate-90" />
          <span>Menu</span>
        </SheetTrigger>

        <SheetContent className="w-[min(88vw,28rem)] border-gray-800 bg-[#050505] px-6 py-8 text-white sm:max-w-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-6 pr-12">
            <Link
              href="/"
              className="font-heading text-2xl tracking-[0.16em]"
            >
              STUDIO
              <span className="text-[#d6b36a]">Z.</span>
            </Link>

            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Navigation
            </p>
          </div>

          <nav
            className="mt-10 flex flex-col"
            aria-label="Mobile navigation"
          >
            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/"
                  onClick={() => setActiveItem("home")}
                  className={`group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "home" ? activeClass : ""}`}
                />
              }
            >
              <span>Home</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>

            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/about"
                  onClick={() => setActiveItem("about")}
                  className={`group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "about" ? activeClass : ""}`}
                />
              }
            >
              <span>About Us</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>

            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="#services"
                  onClick={() => setActiveItem("services")}
                  className={`group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "services" ? activeClass : ""}`}
                />
              }
            >
              <span>Services</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>

            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="#projects"
                  onClick={() => setActiveItem("portfolio")}
                  className={`group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "portfolio" ? activeClass : ""}`}
                />
              }
            >
              <span>Portfolio</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>

            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/news"
                  onClick={() => setActiveItem("news")}
                  className={`group flex items-center justify-between border-b border-gray-800 py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "news" ? activeClass : ""}`}
                />
              }
            >
              <span>News</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>

            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/contact"
                  onClick={() => setActiveItem("contact")}
                  className={`group flex items-center justify-between py-4 font-heading text-2xl transition-colors hover:text-[#d6b36a] sm:text-3xl ${activeItem === "contact" ? activeClass : ""}`}
                />
              }
            >
              <span>Contact</span>

              <ArrowUpRight className="size-5 text-gray-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6b36a]" />
            </SheetClose>
          </nav>

          <div className="mt-auto border-t border-gray-800 pt-6 text-sm leading-relaxed text-gray-500">
            <p>Mumbai, India</p>

            <a
              href="mailto:hello@studioz.com"
              className="transition-colors hover:text-[#d6b36a]"
            >
              hello@studioz.com
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}