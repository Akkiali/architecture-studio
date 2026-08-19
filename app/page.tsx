import projects from "@/data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="relative mx-4 my-4 min-h-[70vh] overflow-hidden rounded-3xl bg-cover bg-center px-6 py-20 md:mx-8 md:my-8 md:px-12 md:py-28"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <p className="mb-6 text-xl uppercase tracking-[0.5em] text-gray-300">
            Architecture & Interior Design
          </p>

          <h1 className="max-w-6xl text-5xl md:text-8xl lg:text-9xl">
            Designing spaces
            <br />
            that inspire.
          </h1>

          <p className="mt-8 max-w-xl text-xl text-gray-200 md:text-2xl">
            We create thoughtful architectural and interior spaces
            that combine functionality, character and timeless design.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block border border-white px-7 py-4 text-xl uppercase tracking-wider hover:bg-white hover:text-black"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-32">
        <p className="text-lg uppercase tracking-[0.3em] text-gray-500">
          Our Services
        </p>

        <h2 className="mt-6 max-w-3xl text-5xl font-medium leading-tight md:text-7xl">
          What we do
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-2xl font-medium">Architecture</h3>
            <p className="mt-4 text-xl text-gray-400">
              Thoughtful architectural solutions designed around people,
              purpose and place.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-2xl font-medium">Interior Design</h3>
            <p className="mt-4 text-xl text-gray-400">
              Functional and refined interiors with attention to every detail.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-3xl font-medium md:text-4xl">Space Planning</h3>
            <p className="mt-4 text-xl text-gray-400">
              Efficient layouts that make every space practical and comfortable.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-2xl font-medium">Renovation</h3>
            <p className="mt-4 text-xl text-gray-400">
              Transforming existing spaces into modern and purposeful environments.
            </p>
          </div>
        </div>
      </section>
      {/* {image section} */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <p className="text-lg uppercase tracking-[0.3em] text-gray-400">
          Selected Projects
        </p>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-medium md:text-7xl">
            Our Work
          </h2>

          <p className="max-w-md text-lg leading-relaxed text-gray-400">
            A selection of spaces designed with a focus on
            architecture, detail and timeless character.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <p className="text-xl uppercase tracking-[0.1em] text-gray-500">
                  {project.category}
                </p>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[360px]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">


                <h3 className="mt-2 text-2xl font-medium md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-1 text-lg text-gray-400">
                  {project.location}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <p className="text-lg uppercase tracking-[0.3em] text-gray-500">
          Our Process
        </p>

        <h2 className="mt-6 max-w-3xl text-5xl font-medium md:text-7xl">
          From idea to space.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">01</p>
            <h3 className="mt-6 text-2xl font-medium">Discover</h3>
            <p className="mt-4 text-lg text-gray-400">
              Understanding your vision, needs and space.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">02</p>
            <h3 className="mt-6 text-2xl font-medium">Concept</h3>
            <p className="mt-4 text-lg text-gray-400">
              Turning ideas into layouts, forms and materials.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">03</p>
            <h3 className="mt-6 text-2xl font-medium">Develop</h3>
            <p className="mt-4 text-lg text-gray-400">
              Refining every detail of the design.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">04</p>
            <h3 className="mt-6 text-2xl font-medium">Deliver</h3>
            <p className="mt-4 text-lg text-gray-400">
              Bringing the final design into reality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="border-t border-gray-800 pt-12 text-center">
          <p className="text-lg uppercase tracking-[0.3em] text-gray-500">
            Start a Project
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-medium leading-tight md:text-7xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Let&apos;s create a space that reflects your vision,
            purpose and personality.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block border border-white px-8 py-4 text-lg uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

    </main>
  );
}