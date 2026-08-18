export default function Contact() {
  return (
    <main className="px-6 py-20 md:px-12 md:py-32">
      <p className="text-2xl uppercase tracking-[0.75em] text-gray-500 md:text-3xl font-semibold">
        Contact
      </p>

      <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-tight md:text-7xl">
        Let&apos;s <a className="underline decoration-sky-500">design</a> something meaningful.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
        Have a project in mind? Get in touch with our studio and
        let&apos;s discuss your ideas.
      </p>

      <div className="mt-12 space-y-4 text-gray-400">
        <p>Email: hello@studio.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Mumbai, India</p>
      </div>
    </main>
  );
}