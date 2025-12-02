"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

interface MarqueeItem {
  text: string;
  style: string;
}

const MarqueeRow: React.FC<{ items: MarqueeItem[]; reverse?: boolean; duration?: string }> = ({ items, reverse = false, duration = '40s' }) => {
  const duplicatedItems = [...items, ...items];
  const animationName = reverse ? 'marquee-reverse' : 'marquee';
  
  return (
    <div className="flex" style={{ animation: `${animationName} ${duration} linear infinite` }}>
      {duplicatedItems.map((item, index) => (
        <div key={index} className={item.style}>
          {item.text}
        </div>
      ))}
    </div>
  );
};


export default function DanceRevolution() {
  const textBaseStyle = "font-display font-bold text-[140px] leading-[140px] tracking-[-0.02em] whitespace-nowrap uppercase px-6";
  const textFilledStyle = `${textBaseStyle} text-white`;
  const textOutlinedStyle = `${textBaseStyle} text-transparent [-webkit-text-stroke:1px_var(--color-primary)]`;

  const marquee1Items: MarqueeItem[] = [
    { text: "content", style: textOutlinedStyle },
    { text: "creation", style: textFilledStyle },
    { text: "content", style: textFilledStyle },
    { text: "creation", style: textOutlinedStyle },
  ];
  
  const marquee2Items: MarqueeItem[] = [
    { text: "content", style: textFilledStyle },
    { text: "creation", style: textOutlinedStyle },
    { text: "content", style: textOutlinedStyle },
    { text: "creation", style: textFilledStyle },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
      `}</style>
      <section className="relative w-full h-[660px] bg-black overflow-hidden flex flex-col justify-center" aria-label="Content Creation decorative section">
        <div className="absolute top-[160px] -translate-y-1/2 left-0 w-full z-0" aria-hidden="true">
            <MarqueeRow items={marquee1Items} duration="40s" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Link href="#" aria-label="View content creation gallery" className="group relative flex justify-center items-center w-[322px] h-[322px]">
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/circular-fisheye-view-of-modern-broadcas-8dc24e52-20251127153034.jpg"
                    alt="Creative production with purple lighting"
                    fill
                    className="object-cover scale-140 group-hover:scale-150 transition-transform duration-500 ease-in-out"
                />
            </div>
            <div className="relative z-10 w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <ArrowUp size={36} strokeWidth={1.5} className="text-primary" />
            </div>
          </Link>
        </div>
        
        <div className="absolute bottom-[160px] translate-y-1/2 left-0 w-full z-0" aria-hidden="true">
            <MarqueeRow items={marquee2Items} reverse duration="45s" />
        </div>
      </section>
    </>
  );
}