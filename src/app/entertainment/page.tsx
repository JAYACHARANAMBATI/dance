import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Sparkles, Music, Tv, Theater, Radio, Film, Play, Star, Mic, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Content Creation
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              ENTERTAINMENT
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering entertainment content that captivates and delights audiences. From concept to production, we create experiences that keep viewers coming back for more.
            </p>
          </div>

          {/* Featured Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-pink-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80"
                  alt="Music Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-pink-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-pink-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">MUSIC VIDEO</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-pink-400 text-sm uppercase tracking-wider">
                  <Music className="w-4 h-4" />
                  <span>Music Production</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Chart-Topping Music Videos</h3>
                <p className="text-muted-foreground">Cinematic music video production that elevates artists and songs</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80"
                  alt="TV Show Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">WEB SERIES</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Tv className="w-4 h-4" />
                  <span>Series Production</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Original Web Series</h3>
                <p className="text-muted-foreground">Binge-worthy content designed for digital platforms and streaming</p>
              </div>
            </div>
          </div>

          {/* Content Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                What We Create
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Diverse Entertainment Content
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Tv,
                  title: "TV & Web Series",
                  description: "Original scripted content from comedy sketches to dramatic series that hook audiences.",
                  color: "pink"
                },
                {
                  icon: Music,
                  title: "Music Content",
                  description: "Music videos, live performances, and concert films with premium production quality.",
                  color: "purple"
                },
                {
                  icon: Theater,
                  title: "Stage Performances",
                  description: "Recording and broadcasting theatrical productions, comedy shows, and live events.",
                  color: "blue"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-pink-500/50 transition-all duration-300"
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

          {/* Talk Shows & Interviews Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Conversational Content
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Talk Shows & Interviews
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Engaging conversations that inform, inspire, and entertain audiences with compelling storytelling and authentic dialogue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-orange-500/50 transition-all duration-500">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
                    alt="Talk Show Production"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-orange-500/80 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold text-sm">TALK SHOW</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-orange-400 text-sm uppercase tracking-wider">
                    <Mic className="w-4 h-4" />
                    <span>Talk Show Production</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Talk Shows</h3>
                  <p className="text-muted-foreground">Dynamic talk show formats with expert hosts, celebrity guests, and engaging topics that captivate audiences.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Celebrity interviews and panel discussions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Live studio audience experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Multi-camera production setups</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-green-500/50 transition-all duration-500">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
                    alt="Interview Production"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-green-500/80 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold text-sm">INTERVIEWS</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-green-400 text-sm uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4" />
                    <span>Interview Series</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">In-Depth Interviews</h3>
                  <p className="text-muted-foreground">Intimate one-on-one conversations and documentary-style interviews that tell compelling stories.</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Executive and thought leader interviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Documentary-style storytelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Podcast and digital interview formats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interview Formats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Late Night Style",
                  description: "Entertainment-focused talk shows with comedy, games, and celebrity guests in a casual studio setting."
                },
                {
                  title: "Expert Panels",
                  description: "Industry expert discussions and roundtable conversations on trending topics and important issues."
                },
                {
                  title: "Documentary Interviews",
                  description: "Long-form conversational interviews that dive deep into subjects' stories and experiences."
                }
              ].map((format, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-orange-500/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{format.title}</h4>
                  <p className="text-muted-foreground">{format.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Production Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Full Service Production
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                From Concept to Distribution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Film, title: "Content Development", description: "Creative ideation and scriptwriting for original content" },
                { icon: Theater, title: "Casting & Talent", description: "Professional talent sourcing and audition management" },
                { icon: Sparkles, title: "Production Design", description: "Sets, costumes, and visual aesthetics that wow" },
                { icon: Music, title: "Audio & Music", description: "Original scores, sound design, and audio mastering" },
                { icon: Tv, title: "Editing & VFX", description: "Post-production excellence with visual effects" },
                { icon: Radio, title: "Distribution", description: "Multi-platform release strategy and promotion" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-pink-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-pink-400" />
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
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to produce entertainment content that captivates audiences and stands out in the market.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                START YOUR PROJECT
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}