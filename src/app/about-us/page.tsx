import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h6 className="text-sm tracking-[0.2em] uppercase text-purple-accent mb-4">
            About Us
          </h6>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The Vision Behind<br />Anand film fare corporation
          </h1>
          <p className="text-xl text-secondary max-w-3xl leading-relaxed">
            A creative powerhouse dedicated to crafting compelling narratives across 
            ad films, events, marketing campaigns, and entertainment productions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              We believe in the power of storytelling to transform brands, captivate 
              audiences, and create unforgettable experiences. Every project we undertake 
              is driven by passion, creativity, and a commitment to excellence.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              From conceptualization to execution, we bring together the finest talent 
              and cutting-edge technology to deliver productions that resonate and inspire.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/generated_images/professional-film-production-set-with-ci-07a1c724-20251127142234.jpg"
              alt="Production Set"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Creativity",
                description: "We push boundaries and think beyond conventional limits to deliver innovative solutions that stand out."
              },
              {
                number: "02",
                title: "Excellence",
                description: "Quality is non-negotiable. We strive for perfection in every frame, every detail, every production."
              },
              {
                number: "03",
                title: "Collaboration",
                description: "We believe the best results come from working together, combining diverse perspectives and expertise."
              }
            ].map((value) => (
              <div 
                key={value.number}
                className="border border-border rounded-lg p-8 bg-card/40 backdrop-blur-sm hover:border-purple-accent transition-all duration-300"
              >
                <div className="text-6xl font-bold text-purple-accent mb-4">
                  {value.number}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ad Films", href: "/ad-films" },
              { title: "Events", href: "/events" },
              { title: "Marketing", href: "/marketing" },
              { title: "Entertainment", href: "/entertainment" }
            ].map((service) => (
              <Link 
                key={service.title}
                href={service.href}
                className="group border border-border rounded-lg p-8 bg-card/40 hover:bg-card/60 hover:border-purple-accent transition-all duration-300"
              >
                <h4 className="text-2xl font-semibold text-white group-hover:text-purple-accent transition-colors">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Let's Create Something<br />Extraordinary Together
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Ready to bring your vision to life? Get in touch with us today.
          </p>
          <MovingBorderButton
            as={Link}
            href="/events"
            borderRadius="1.75rem"
            containerClassName="h-[50px] w-auto"
            className="bg-white/10 dark:bg-slate-900 text-white border-white/20 hover:bg-white/20 px-8"
            borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--violet-500)_40%,transparent_60%)]"
          >
            Explore Our Work
          </MovingBorderButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}