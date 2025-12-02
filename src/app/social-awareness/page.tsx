import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Users, Heart, Globe, Megaphone, BookOpen, Handshake, Play, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SocialAwarenessPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Making Impact
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              SOCIAL AWARENESS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating content that drives social change and raises awareness for important causes. We believe in the power of media to inspire action and make a positive difference in communities.
            </p>
          </div>

          {/* Featured Campaigns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-red-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Community Campaign"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-red-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">COMMUNITY</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-red-400 text-sm uppercase tracking-wider">
                  <Heart className="w-4 h-4" />
                  <span>Social Impact</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Education for All</h3>
                <p className="text-muted-foreground">Documenting grassroots initiatives bringing education to underserved communities</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                  alt="Environmental Campaign"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">ENVIRONMENT</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>Sustainability</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Green Future Initiative</h3>
                <p className="text-muted-foreground">Awareness campaigns promoting environmental conservation and sustainability</p>
              </div>
            </div>
          </div>

          {/* Cause Areas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Our Focus Areas
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Causes We Champion
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Education & Youth",
                  description: "Supporting educational initiatives and youth empowerment programs that shape tomorrow's leaders.",
                  color: "red"
                },
                {
                  icon: Heart,
                  title: "Health & Wellness",
                  description: "Promoting public health awareness, mental wellness, and healthcare accessibility for all.",
                  color: "purple"
                },
                {
                  icon: Globe,
                  title: "Environment",
                  description: "Advocating for climate action, conservation efforts, and sustainable living practices.",
                  color: "blue"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-red-500/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${service.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 text-${service.color}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-12 rounded-2xl border border-border/40 bg-gradient-to-br from-red-500/5 to-purple-500/5">
            {[
              { value: "100+", label: "Campaigns Launched" },
              { value: "50+", label: "NGO Partners" },
              { value: "5M+", label: "Lives Impacted" },
              { value: "₹2Cr+", label: "Funds Raised" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                How We Help
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Amplifying Your Message
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Megaphone, title: "Awareness Campaigns", description: "Multi-channel campaigns that reach and engage your target audience" },
                { icon: Users, title: "Documentary Films", description: "Powerful storytelling that humanizes issues and drives empathy" },
                { icon: Handshake, title: "Partnership Content", description: "Collaborative content with NGOs and social enterprises" },
                { icon: BookOpen, title: "Educational Videos", description: "Informative content that educates and inspires action" },
                { icon: Heart, title: "Fundraising Videos", description: "Compelling appeals that motivate donations and support" },
                { icon: Globe, title: "PSA Production", description: "Public service announcements for broadcast and digital media" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Create Change Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to amplify your social message and create meaningful impact through compelling media content.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                LAUNCH YOUR CAMPAIGN
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}