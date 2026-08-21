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

  const activeClass = "rounded-full bg-black px-4 py-2 font-semibold text-white";

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
      className="sticky top-0 z-50 flex min-h-14 items-center justify-start gap-5 bg-white px-5 py-3 text-black lg:min-h-20 lg:justify-between lg:px-[8%] lg:py-4"
    >
      {/* LEFT DESKTOP NAVIGATION */}
      <div className="hidden flex-1 items-center justify-end gap-7 pr-8 lg:flex">
        <Link
          href="/"
          onClick={() => setActiveItem("home")}
          className={`nav-link font-sans text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${activeItem === "home" ? activeClass : ""}`}
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={() => setActiveItem("about")}
          className={`nav-link font-sans text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${activeItem === "about" ? activeClass : ""}`}
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
            className={`nav-trigger group flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:text-gray-500 ${activeItem === "services" ? activeClass : ""}`}
          >
            Services

            <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">
              +
            </span>
          </button>

          {menu === "services" && (
            <div className="absolute left-0 top-10 z-20 w-52 border border-gray-200 bg-white p-4 text-black shadow-lg">
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
        className="brand-mark order-2 group shrink-0 font-heading font-medium text-3xl tracking-[0.18em] transition-opacity hover:opacity-60 lg:order-none lg:text-4xl"
      >
        STUDIO<span className="text-[#d6b36a]">Z.</span>
      </Link>

      {/* RIGHT DESKTOP NAVIGATION */}
      <div className="hidden flex-1 items-center justify-start gap-7 pl-8 lg:flex">
        {/* PROJECTS / PORTFOLIO DROPDOWN */}
        <div className="relative">
          <button
            onClick={() =>
            (setMenu(menu === "projects" ? null : "projects"),
              setActiveItem("portfolio"))
            }
            aria-expanded={menu === "projects"}
            className={`nav-trigger group flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:text-gray-500 ${activeItem === "portfolio" ? activeClass : ""}`}
          >
            Portfolio

            <span className="font-sans text-sm not-italic text-gray-500 transition-transform group-hover:translate-x-1">
              +
            </span>
          </button>

          {menu === "projects" && (
            <div className="absolute right-0 top-10 z-20 w-48 border border-gray-200 bg-white p-4 text-black shadow-lg">
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
          className={`nav-link font-sans text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${activeItem === "news" ? activeClass : ""}`}
        >
          News
        </Link>

        <Link
          href="/contact"
          onClick={() => setActiveItem("contact")}
          className={`nav-link font-sans text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50 ${activeItem === "contact" ? activeClass : ""}`}
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
              className="order-1 flex size-5 items-center justify-center text-black transition-opacity hover:opacity-50 lg:hidden"
            />
          }
        >
          <MenuIcon className="size-4 transition-transform duration-300 group-hover:rotate-90" />
        </SheetTrigger>

        <SheetContent className="w-[min(88vw,28rem)] border-gray-200 bg-white px-6 py-8 text-black sm:max-w-none">
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 pr-12">
            <Link
              href="/"
              className="brand-mark inline-block font-heading font-medium text-3xl tracking-[0.18em]"
            >
              STUDIO<span className="text-[#d6b36a]">Z.</span>
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
                  className={`group flex items-center justify-between border-b border-gray-200 py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "home" ? activeClass : ""}`}
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
                  className={`group flex items-center justify-between border-b border-gray-200 py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "about" ? activeClass : ""}`}
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
                  className={`group flex items-center justify-between border-b border-gray-200 py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "services" ? activeClass : ""}`}
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
                  className={`group flex items-center justify-between border-b border-gray-200 py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "portfolio" ? activeClass : ""}`}
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
                  className={`group flex items-center justify-between border-b border-gray-200 py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "news" ? activeClass : ""}`}
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
                  className={`group flex items-center justify-between py-4 font-sans text-2xl font-semibold transition-colors hover:text-gray-500 sm:text-3xl ${activeItem === "contact" ? activeClass : ""}`}
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