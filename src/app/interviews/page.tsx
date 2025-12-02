import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { MessageSquare, Video, Mic2, Users, BookOpen, Play, Camera, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InterviewsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Conversations
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              INTERVIEWS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conducting insightful interviews that reveal compelling stories. We create meaningful dialogue that resonates with viewers and showcases authentic perspectives.
            </p>
          </div>

          {/* Featured Interviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-green-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                  alt="Corporate Interview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-green-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">BUSINESS</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-green-400 text-sm uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Executive Interview</span>
                </div>
                <h3 className="text-2xl font-bold text-white">CEO Success Stories</h3>
                <p className="text-muted-foreground">In-depth conversations with business leaders sharing their journey and insights</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&q=80"
                  alt="Documentary Interview"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">DOCUMENTARY</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Camera className="w-4 h-4" />
                  <span>Documentary Style</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Human Interest Stories</h3>
                <p className="text-muted-foreground">Authentic narratives that capture real experiences and emotions</p>
              </div>
            </div>
          </div>

          {/* Interview Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Our Approach
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Professional Interview Production
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Research & Preparation",
                  description: "Thorough background research and thoughtful question development for meaningful conversations.",
                  color: "green"
                },
                {
                  icon: Video,
                  title: "Multi-Camera Setup",
                  description: "Professional filming with multiple angles for dynamic, engaging visual storytelling.",
                  color: "purple"
                },
                {
                  icon: Mic2,
                  title: "Audio Excellence",
                  description: "Crystal-clear sound recording with professional microphones and audio engineering.",
                  color: "blue"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-green-500/50 transition-all duration-300"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-12 rounded-2xl border border-border/40 bg-gradient-to-br from-green-500/5 to-purple-500/5">
            {[
              { value: "500+", label: "Interviews Conducted" },
              { value: "200+", label: "Industry Leaders" },
              { value: "15M+", label: "Views Worldwide" },
              { value: "92%", label: "Engagement Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Interview Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Versatile Formats
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Interview Styles We Master
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: MessageSquare, title: "Corporate Interviews", description: "Professional interviews for company profiles and testimonials" },
                { icon: Users, title: "Expert Panels", description: "Multi-person discussions with industry thought leaders" },
                { icon: Camera, title: "Documentary Interviews", description: "In-depth storytelling for documentaries and features" },
                { icon: Video, title: "Virtual Interviews", description: "High-quality remote interviews via video conferencing" },
                { icon: Mic2, title: "Podcast Interviews", description: "Audio-focused conversations optimized for podcasting" },
                { icon: CheckCircle2, title: "Testimonials", description: "Client and customer success story interviews" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-green-400" />
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
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-green-500/10 via-purple-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Capture Your Story
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Professional interview production that brings out authentic voices and creates lasting impact.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                SCHEDULE AN INTERVIEW
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}