import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This component assumes that the following animation is defined in a global CSS file (e.g., globals.css):
// @keyframes scroll-left {
//   from { transform: translateX(0); }
//   to { transform: translateX(-50%); }
// }
// .animate-scroll-left {
//   animation: scroll-left 40s linear infinite;
// }

const TickerItem = ({ outlined = false }: {outlined?: boolean;}) =>
<li className="flex items-center shrink-0 px-8">
    <h2
    className={`font-display font-bold text-[120px] leading-none whitespace-nowrap
        xl:text-[120px] lg:text-[96px] md:text-[80px] sm:text-[60px]
        ${outlined ?
    'text-transparent [-webkit-text-stroke:1px_var(--color-foreground)]' :
    'text-foreground'}`
    }>

      UPCOMING EVENTS
    </h2>
  </li>;


const TickerDot = () =>
<li className="flex items-center shrink-0">
      <div className="w-3.5 h-3.5 bg-purple-accent rounded-full" />
    </li>;


export default function EventsTicker() {
  const tickerItems =
  <React.Fragment>
      <TickerItem />
      <TickerDot />
      <TickerItem outlined />
      <TickerDot />
    </React.Fragment>;


  return (
    <section
      id="ticker"
      className="relative w-full py-32 overflow-hidden bg-background flex flex-col items-center justify-center">

      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/large-corporate-event-stage-with-profess-61be1892-20251127153034.jpg"
          alt="Creative production studio with purple and pink lighting"
          fill
          className="object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-br from-purple-accent/60 to-magenta-accent/60" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="w-full flex overflow-hidden">
        <ul className="flex shrink-0 animate-scroll-left">
          {tickerItems}
          {tickerItems}
          {tickerItems}
          {tickerItems}
        </ul>
      </div>

      <div className="relative z-10 mt-16 text-center flex flex-col items-center gap-8 px-6">
        <p className="max-w-[650px] text-body-lg text-text-secondary">
          Experience the power of creative storytelling at Anand Events. Our events showcase innovation, entertainment, and meaningful connections.
        </p>
        <Link
          href="/events"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors border border-foreground/80 text-foreground bg-transparent hover:bg-foreground hover:text-background px-8 py-3.5">
          View All Events
        </Link>
      </div>
    </section>);

}