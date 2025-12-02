import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Mic, Video, Radio, Users, Sparkles, Tv, Play, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TalkShowPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Broadcasting
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              TALK SHOW
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Producing engaging talk shows that spark conversations and connect with audiences. Our professional production team ensures every episode captivates and entertains.
            </p>
          </div>

          {/* Featured Shows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-orange-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80"
                  alt="Talk Show Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-orange-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">WEEKLY SERIES</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 text-sm uppercase tracking-wider">
                  <Mic className="w-4 h-4" />
                  <span>Celebrity Interviews</span>
                </div>
                <h3 className="text-2xl font-bold text-white">The Evening Hour</h3>
                <p className="text-muted-foreground">In-depth conversations with thought leaders and industry pioneers</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80"
                  alt="Studio Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">LIVE BROADCAST</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Tv className="w-4 h-4" />
                  <span>Panel Discussions</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Perspectives Live</h3>
                <p className="text-muted-foreground">Dynamic panel debates on trending topics and current affairs</p>
              </div>
            </div>
          </div>

          {/* Production Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Full Production Services
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Professional Talk Show Production
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Video,
                  title: "Studio Production",
                  description: "State-of-the-art studio facilities with professional lighting, cameras, and sound equipment.",
                  color: "orange"
                },
                {
                  icon: Mic,
                  title: "Host & Talent",
                  description: "Experienced hosts and production crew who bring energy and professionalism to every show.",
                  color: "purple"
                },
                {
                  icon: Sparkles,
                  title: "Post-Production",
                  description: "Expert editing, graphics, and finishing touches that elevate the final product.",
                  color: "blue"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-orange-500/50 transition-all duration-300"
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

          {/* Show Formats */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Versatile Formats
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Every Type of Talk Show
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mic, title: "Interview Shows", description: "One-on-one conversations with industry leaders and celebrities" },
                { icon: Users, title: "Panel Discussions", description: "Multi-guest debates and roundtable conversations" },
                { icon: Radio, title: "Podcast Recording", description: "Audio-first content with video streaming capabilities" },
                { icon: Tv, title: "Live Broadcasting", description: "Real-time shows with audience interaction and call-ins" },
                { icon: Sparkles, title: "Entertainment Shows", description: "Light-hearted talk shows with games and performances" },
                { icon: Award, title: "Award Shows", description: "Ceremony hosting and special event productions" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-orange-400" />
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
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Talk Show?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              From concept to broadcast, we provide everything you need to create compelling talk show content.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                START PRODUCTION
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}