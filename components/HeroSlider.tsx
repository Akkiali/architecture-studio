"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import heroSlides from "@/data/heroSlides";

export default function HeroSlider() {
   const [currentSlide, setCurrentSlide] = useState(0);

   const slide = heroSlides[currentSlide];

   const nextSlide = () => {
      setCurrentSlide((prev) =>
         prev === heroSlides.length - 1 ? 0 : prev + 1
      );
   };

   const previousSlide = () => {
      setCurrentSlide((prev) =>
         prev === 0 ? heroSlides.length - 1 : prev - 1
      );
   };

   return (
      <section className="relative mx-10 my-10 h-[calc(100svh-12rem)] min-h-[520px] overflow-hidden rounded-[1.25rem] md:mx-20 md:my-16 md:h-[calc(100svh-18rem)] md:min-h-[560px]">
         <Image
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover object-center transition-transform duration-700"
         />

         <div className="absolute inset-0 bg-black/35" />
         <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

         <div className="relative z-10 flex h-full flex-col justify-center px-7 pb-20 pt-10 text-white md:px-[10%] md:pb-24 md:pt-0">
            <div className="mb-7 flex items-center gap-5 md:mb-8">
               <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.25em] text-white/85 md:text-sm">
                  {slide.category}
               </p>
               <span className="h-px w-16 bg-white/60 md:w-24" />
            </div>

            <h1 className="max-w-4xl font-sans text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[5.5rem]">
               {slide.title}
            </h1>

            <p className="mt-7 max-w-md font-sans text-sm leading-relaxed text-white/80 md:text-base">
               {slide.description}
            </p>

            <p className="absolute bottom-7 left-7 font-sans text-xs tracking-[0.25em] text-white/75 md:bottom-8 md:left-[10%]">
               {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </p>
         </div>

         <div className="absolute bottom-0 right-5 z-20 h-[28%] w-[54%] max-w-[30rem] bg-black/20 md:right-8 md:h-[34%] md:w-[38%]">
            <Image
               src={slide.previewImage}
               alt="Next project preview"
               fill
               sizes="(max-width: 768px) 54vw, 38vw"
               className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
         </div>

         <div className="absolute right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2 md:right-6">
            <button
               onClick={nextSlide}
               aria-label="Next slide"
               className="flex size-14 items-center justify-center rounded-sm bg-white text-black transition-colors hover:bg-[#d6b36a]"
            >
               <ArrowRight size={21} strokeWidth={1.5} />
            </button>

            <button
               onClick={previousSlide}
               aria-label="Previous slide"
               className="flex size-14 items-center justify-center rounded-sm bg-white text-black transition-colors hover:bg-[#d6b36a]"
            >
               <ArrowLeft size={21} strokeWidth={1.5} />
            </button>
         </div>
      </section>
   );
}