import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FinalCta = () => {
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-media-production-team-celeb-ea090733-20251127153034.jpg";

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-[500px] flex-col items-center justify-center px-6 text-center md:h-[600px] lg:h-[720px] md:px-12">
        
        {/* Desktop Button */}
        <div className="absolute top-12 right-6 hidden lg:block md:right-12 xl:top-24 xl:right-24">
          <Link href="/plan-event">
            <Button
              variant="default"
              size="lg"
              className="group h-auto rounded-full bg-white px-8 py-4 text-base font-medium text-black shadow-lg transition-colors hover:bg-gray-200"
            >
              Let's Create!
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Main Text */}
        <h2 className="font-display max-w-5xl text-4xl font-bold uppercase text-white sm:text-5xl lg:text-[64px] lg:leading-[1.2]">
          &quot;LET YOUR STORY SHINE! CREATE WITH US AT ANAND MEDIA!&quot;
        </h2>

        {/* Mobile Button */}
        <div className="mt-12 lg:hidden">
          <Link href="/plan-event">
            <Button
              variant="default"
              size="lg"
              className="group h-auto rounded-full bg-white px-8 py-4 text-base font-medium text-black shadow-lg transition-colors hover:bg-gray-200"
            >
              Let's Create!
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FinalCta;