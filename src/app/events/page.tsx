import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Calendar, Users, Music, Sparkles, Clock, MapPin, Award, CheckCircle2, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Experiences
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              EVENTS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Orchestrating memorable events that leave lasting impressions. From concept to execution, we handle every detail to ensure your event is a resounding success.
            </p>
          </div>

          {/* Featured Wedding Events - Highlight Card */}
          <div className="mb-12">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-magenta-500/60 bg-card hover:border-magenta-500 transition-all duration-500 shadow-2xl shadow-magenta-500/20">
              <div className="absolute top-4 right-4 z-10 px-5 py-2 bg-gradient-to-r from-magenta-500 to-purple-500 backdrop-blur-sm rounded-full">
                <span className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current" />
                  FEATURED
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto md:min-h-[500px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
                    alt="Wedding Event"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-magenta-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-white font-semibold text-sm">WEDDING EVENTS</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 bg-gradient-to-br from-magenta-500/10 via-purple-500/5 to-transparent">
                  <div className="inline-block">
                    <h6 className="tracking-[0.3em] uppercase text-xs text-magenta-400 mb-2">
                      Celebrate Love
                    </h6>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                    Your Dream Wedding,<br />Perfectly Orchestrated
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    From intimate ceremonies to grand celebrations, we create magical wedding experiences that reflect your unique love story. Every detail is crafted with care and precision.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-magenta-500/20 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-magenta-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Full Planning</div>
                        <div className="text-sm text-muted-foreground">End-to-end</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Custom Themes</div>
                        <div className="text-sm text-muted-foreground">Personalized</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-magenta-500/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-magenta-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Pre Wedding Shoots</div>
                        <div className="text-sm text-muted-foreground">Cinematic style</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Venues</div>
                        <div className="text-sm text-muted-foreground">Premium</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/plan-event"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-magenta-500 to-purple-500 hover:from-magenta-600 hover:to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-magenta-500/30"
                    >
                      <Heart className="w-5 h-5" />
                      PLAN YOUR WEDDING
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                  alt="Corporate Event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">CORPORATE</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Annual Summit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>500+ Attendees</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Tech Industry Conference</h3>
                <p className="text-muted-foreground">Full-scale event management including venue, production, and live streaming</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-magenta-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                  alt="Concert Event"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-magenta-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">ENTERTAINMENT</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Music className="w-4 h-4" />
                    <span>Live Concert</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2000+ Attendees</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Music Festival Production</h3>
                <p className="text-muted-foreground">Complete stage setup, sound engineering, and crowd management</p>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                What We Organize
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Diverse Event Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Corporate Events",
                  description: "Product launches, conferences, team building, and business networking events that inspire and engage.",
                  color: "purple"
                },
                {
                  icon: Music,
                  title: "Entertainment Events",
                  description: "Concerts, festivals, award shows, and performances with world-class production quality.",
                  color: "magenta"
                },
                {
                  icon: Sparkles,
                  title: "Social Celebrations",
                  description: "Weddings, galas, private parties, and special occasions crafted to perfection.",
                  color: "blue"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-purple-500/50 transition-all duration-300"
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

          {/* Services Included */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Complete Solutions
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                End-to-End Event Management
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Venue Selection", description: "Perfect locations matched to your event vision" },
                { icon: Calendar, title: "Event Planning", description: "Detailed timelines and logistics coordination" },
                { icon: Users, title: "Guest Management", description: "Registration, seating, and hospitality services" },
                { icon: Sparkles, title: "Production & AV", description: "Professional sound, lighting, and visual effects" },
                { icon: Music, title: "Entertainment", description: "Talent booking and performance coordination" },
                { icon: Award, title: "Branding & Decor", description: "Custom theming and branded experiences" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-purple-400" />
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
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-purple-500/10 via-magenta-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Create Your Perfect Event
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              From intimate gatherings to large-scale productions, we bring your vision to life with precision and creativity.
            </p>
            <Link
              href="/plan-event"
              className="inline-block px-8 py-4 bg-magenta-500 hover:bg-magenta-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              PLAN YOUR EVENT
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}