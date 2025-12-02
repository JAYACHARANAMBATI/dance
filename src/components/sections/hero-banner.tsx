"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const slides = [
{
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-film-production-set-with-ci-07a1c724-20251127142234.jpg",
  label: "AD FILMS",
  title: "CREATIVE STORYTELLING",
  link: "/ad-films"
},
{
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/elegant-corporate-event-stage-with-profe-594041f2-20251127142234.jpg",
  label: "EVENTS",
  title: "CAPTIVATING MOMENTS",
  link: "/events"
},
{
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/modern-marketing-agency-creative-workspa-4555beaf-20251127142234.jpg",
  label: "MARKETING",
  title: "BRAND EXCELLENCE",
  link: "/marketing"
},
{
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-talk-show-studio-set-with-m-efbdb950-20251127142234.jpg",
  label: "TALK SHOW",
  title: "INSPIRING CONVERSATIONS",
  link: "/talk-show"
}];


const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) =>
      <div
        key={index}
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
        index === currentSlide ?
        "opacity-100 translate-x-0" :
        index < currentSlide ?
        "opacity-0 -translate-x-full" :
        "opacity-0 translate-x-full"}`
        }>

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
            src={slide.image}
            alt={slide.label}
            fill
            className="object-cover"
            priority={index === 0} />

            {/* Overlay with purple/magenta gradient for brand consistency */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white !bg-none !bg-cover !bg-center">
            <div className="text-center space-y-6 px-6">
              {/* Slide Label */}
              <h6 className="tracking-[0.2em] uppercase animate-fade-in md:!text-[35px] !font-extrabold md:!text-white !text-2xl !text-white">
                {slide.label}
              </h6>

              {/* Slide Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in animation-delay-200 !opacity-70 !px-0">
                {slide.title}
              </h1>

              {/* CTA Buttons with Moving Border */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 animate-fade-in animation-delay-400">
                <MovingBorderButton
                as={Link}
                href={slide.link}
                borderRadius="1.75rem"
                containerClassName="h-[50px] w-auto"
                className="bg-white/10 dark:bg-slate-900 text-white border-white/20 hover:bg-white/20 px-8"
                borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--violet-500)_40%,transparent_60%)]">View 


              </MovingBorderButton>
                
                <MovingBorderButton
                as={Link}
                href="/about-us"
                borderRadius="1.75rem"
                containerClassName="h-[50px] w-auto"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8"
                borderClassName="h-20 w-20 opacity-[0.6] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]">

                  About Anand film fare corporation
                </MovingBorderButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide">

        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide">

        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) =>
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`transition-all duration-300 ${
          index === currentSlide ?
          "w-12 h-2 bg-primary" :
          "w-2 h-2 bg-white/50 hover:bg-white/80"} rounded-full`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

};

export default HeroBanner;