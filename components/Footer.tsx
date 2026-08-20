import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 px-6 py-16 md:px-12 md:py-20">
      <div className="grid gap-14 md:grid-cols-[1.5fr_0.75fr_1fr] md:gap-12">
        <div>
          <Link
            href="/"
            className="brand-mark inline-block font-heading text-3xl tracking-[0.18em] transition-opacity hover:opacity-60 md:text-4xl"
          >
            STUDIO<span className="text-[#d6b36a]">Z.</span>
          </Link>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-gray-400 md:text-lg">
            Architecture and interiors shaped around thoughtful, functional and
            timeless spaces.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Explore
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 text-base">
            <Link href="/" className="transition-colors hover:text-[#d6b36a]">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#d6b36a]">
              About
            </Link>
            <Link href="#services" className="transition-colors hover:text-[#d6b36a]">
              Services
            </Link>

            <Link href="#projects" className="transition-colors hover:text-[#d6b36a]">
              Projects
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#d6b36a]">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Contact
          </p>
          <div className="mt-6 space-y-3 text-base text-gray-300">
            <p>Mumbai, India</p>
            <a
              href="mailto:hello@studioz.com"
              className="block transition-colors hover:text-[#d6b36a]"
            >
              hello@studioz.com
            </a>
            <a
              href="tel:+919876543210"
              className="block transition-colors hover:text-[#d6b36a]"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-gray-800 pt-5 text-xs uppercase tracking-[0.18em] text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 StudioZ. All rights reserved.</p>
        <p>Architecture · Interiors · Place</p>
      </div>
    </footer>
  );
}