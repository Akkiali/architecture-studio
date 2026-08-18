export default function Footer() {
  return (
    <footer className="border-t border-gray-300 px-6 py-10 md:px-20">
      {/* main footer */}
      <div className="grid gap-12 md:grid-cols-3">

        {/* main brand */}
        <div className="">
          <h2 className="text-4xl font-bold tracking-[0.2em]">
            STUDIOZ.
          </h2>
          <p className="mt-5 max-w-sm text-xl leading-relaxed text-gray-400">
             Architecture and interior design focused on creating
            thoughtful, functional and timeless spaces.
          </p>
        </div>

        {/* navigation */}

        <div>
          <p className="text-2xl uppercase tracking-[0.3em]">
            Explore
          </p> 
          <div className="mt-2 flex flex-col gap-3">
            <a href="/" className="text-lg transition-opacity ">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>

          </div>
        </div>

        {/* contact */}
        <div>
          <p>Contact</p>
          <div>
            <p>Mumbai, India</p>
            <p>hello@studioz.com</p>
            <p>+91 98765 43210</p>

          </div>
        </div>




        {/* <p className="text-3xl font-medium text-gray-300">
          STUDIOZ.
        </p>

        <p className="text-lg text-gray-500">
          © 2026 StudioZ. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}