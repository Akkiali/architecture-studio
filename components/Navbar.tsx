export default function Navbar() {
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
      <a href="/about" className="text-2xl tracking-widest transition-opacity hover:opacity-50">About</a>
      <a href="/contact" className="text-2xl tracking-widest transition-opacity hover:opacity-50">Contact</a>
     </div>

       {/* Mobile Navigation */}
      <button className="text-sm md:hidden">
        Menu
      </button>



    </nav>
  );
}