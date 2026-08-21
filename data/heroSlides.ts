export type HeroSlide = {
  id: number;
  image: string;
  previewImage: string;
  category: string;
  title: string;
  description: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    previewImage: "/images/hero-slide-2.jpg",
    category: "Architecture & Interior",
    title: "Spaces designed for modern living.",
    description:
      "Thoughtful interiors and architectural spaces shaped with character and timeless detail.",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    previewImage: "/images/hero-slide-3.jpg",
    category: "Residential Design",
    title: "Where comfort meets character.",
    description:
      "Creating refined spaces that balance functionality, warmth and contemporary design.",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    previewImage: "/images/hero-slide-1.jpg",
    category: "Interior Design",
    title: "Designed around the way you live.",
    description:
      "Spaces carefully planned to reflect personality, purpose and everyday living.",
  },
];

export default heroSlides;