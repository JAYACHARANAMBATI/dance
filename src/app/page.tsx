import Navigation from "@/components/sections/navigation";
import HeroBanner from "@/components/sections/hero-banner";
import AboutValues from "@/components/sections/about-values";
import EventsTicker from "@/components/sections/events-ticker";
import DanceRevolution from "@/components/sections/dance-revolution";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroBanner />
      <AboutValues />
      <EventsTicker />
      <DanceRevolution />
      <FinalCta />
      <Footer />
    </div>
  );
}