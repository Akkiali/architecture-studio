export default function News() {
   return (
      <main className="px-6 py-20 md:px-12 md:py-32">
         <p className="text-2xl font-semibold uppercase tracking-[0.75em] text-gray-500 md:text-3xl">
            News
         </p>

         <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-tight md:text-7xl">
            Notes from the studio.
         </h1>

         <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
            A sample space for studio updates, project stories and ideas shaping
            the way we design.
         </p>

         <article className="mt-12 max-w-3xl border-t border-gray-800 pt-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
               Studio note / 20 August 2026
            </p>

            <h2 className="mt-4 text-3xl font-medium md:text-4xl">
               Designing for how life unfolds
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-gray-400">
               This is a sample news note. We are exploring how thoughtful details,
               natural light and flexible spaces can make everyday routines feel
               more connected.
            </p>
         </article>
      </main>
   );
}