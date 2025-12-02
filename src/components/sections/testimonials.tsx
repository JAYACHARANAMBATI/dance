"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const QuoteIcon = () => (
  <svg
    width="71"
    height="52"
    viewBox="0 0 71 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="text-white/10"
  >
    <path
      d="M23.33 51.5C17.56 51.5 12.59 49.52 8.42 45.56C4.31 41.6 2.26 36.78 2.26 31.09V27.5H20.33V31.09C20.33 33.19 20.94 34.81 22.16 35.95C23.38 37.09 25.03 37.66 27.11 37.66V51.5ZM0 25.13V3.63C0 2.53 0.35 1.63 1.06 0.94C1.77 0.25 2.65 0 3.71 0H25.04C26.1 0 27 0.32 27.81 0.97C28.62 1.62 29.02 2.5 29.02 3.63V25.13H0ZM64.31 51.5C58.54 51.5 53.57 49.52 49.4 45.56C45.29 41.6 43.24 36.78 43.24 31.09V27.5H61.31V31.09C61.31 33.19 61.92 34.81 63.14 35.95C64.36 37.09 66.01 37.66 68.09 37.66V51.5ZM40.98 25.13V3.63C40.98 2.53 41.33 1.63 42.04 0.94C42.75 0.25 43.63 0 44.69 0H66.02C67.08 0 67.98 0.32 68.79 0.97C69.6 1.62 70 2.5 70 3.63V25.13H40.98Z"
      fill="currentColor"
    />
  </svg>
);

const testimonials = [
  {
    quote:
      "Anand Media is exceptional! The creative team is incredibly talented, and the production quality is outstanding.",
    name: "Priya Sharma",
    gradient: "from-red-500/60 to-purple-500/60",
  },
  {
    quote:
      "Working with Anand has been amazing! The professionalism and creativity are top-notch. Highly recommended!",
    name: "Arjun Patel",
    gradient: "from-purple-500/60 to-magenta-500/60",
  },
  {
    quote:
      "This studio delivers excellence. The team is responsive, and the facilities are world-class. Absolutely perfect!",
    name: "Rohan Kumar",
    gradient: "from-purple-600/60 to-blue-500/60",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-background-secondary py-[120px] overflow-hidden">
      <div className="container max-w-[1320px] mx-auto px-6 md:px-12">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-10">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-10 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col items-center text-center gap-8 h-full">
                  <QuoteIcon />
                  <div className="relative w-[140px] h-[140px] rounded-full border-2 border-white/10 overflow-hidden shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient}`}
                    />
                  </div>
                  <h4 className="font-display text-[24px] lg:text-[28px] font-semibold leading-snug text-text-primary max-w-[360px]">
                    "{testimonial.quote}"
                  </h4>
                  <div className="mt-auto pt-4">
                    <h6 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      {testimonial.name}, Client
                    </h6>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                current === index ? "w-6 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}