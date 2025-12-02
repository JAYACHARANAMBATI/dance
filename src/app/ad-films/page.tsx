import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Play, Award, TrendingUp, Users, Camera, Film, Sparkles, CheckCircle2, Heart, Globe, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdFilmsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Our Services
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              AD FILMS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating compelling advertising content that captures attention and drives results. Our expert team brings your brand vision to life through innovative storytelling and stunning visuals.
            </p>
          </div>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Featured Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                  alt="Commercial Ad Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Camera className="w-4 h-4" />
                  <span>Brand Commercial</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Luxury Brand Campaign</h3>
                <p className="text-muted-foreground">Premium lifestyle commercial showcasing elegance and sophistication</p>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-magenta-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                  alt="Product Advertisement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-magenta-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </button>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-magenta-400 text-sm uppercase tracking-wider">
                  <Film className="w-4 h-4" />
                  <span>Product Launch</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Tech Innovation Ad</h3>
                <p className="text-muted-foreground">High-impact product reveal with cutting-edge visual effects</p>
              </div>
            </div>
          </div>

          {/* Social Awareness Ads Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Making an Impact
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Social Awareness Campaigns
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Creating powerful narratives that drive social change and inspire action. Our social awareness ads combine emotional storytelling with impactful visuals to raise consciousness and motivate communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Campaign 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-green-500/50 transition-all duration-500">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                    alt="Environmental Awareness Campaign"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-green-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </button>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-green-400 text-sm uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    <span>Environment</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Save Our Planet</h3>
                  <p className="text-muted-foreground text-sm">Climate action campaign promoting sustainable living and environmental conservation</p>
                </div>
              </div>

              {/* Campaign 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-red-500/50 transition-all duration-500">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
                    alt="Health Awareness Campaign"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </button>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 text-sm uppercase tracking-wider">
                    <Heart className="w-4 h-4" />
                    <span>Health</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Mental Health Matters</h3>
                  <p className="text-muted-foreground text-sm">Breaking stigmas and promoting mental wellness through powerful storytelling</p>
                </div>
              </div>

              {/* Campaign 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-blue-500/50 transition-all duration-500">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                    alt="Education Awareness Campaign"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </button>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 text-sm uppercase tracking-wider">
                    <Shield className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Right to Learn</h3>
                  <p className="text-muted-foreground text-sm">Championing education access and empowering underprivileged communities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                What We Offer
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Comprehensive Ad Film Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: "Concept Development",
                  description: "Crafting compelling narratives that resonate with your target audience and amplify your brand message.",
                  color: "purple"
                },
                {
                  icon: Film,
                  title: "Production Excellence",
                  description: "State-of-the-art equipment and experienced crew ensuring cinematic quality in every frame.",
                  color: "magenta"
                },
                {
                  icon: Sparkles,
                  title: "Post-Production",
                  description: "Advanced editing, color grading, VFX, and sound design to create stunning final deliverables.",
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

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                How We Work
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Our Creative Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", description: "Understanding your brand, goals, and target audience" },
                { step: "02", title: "Concept", description: "Developing creative concepts and storyboards" },
                { step: "03", title: "Production", description: "Filming with professional crew and equipment" },
                { step: "04", title: "Delivery", description: "Final edits and optimized formats for all platforms" }
              ].map((process, index) => (
                <div key={index} className="relative p-6 rounded-2xl border border-border/40 bg-card">
                  <div className="text-6xl font-bold text-purple-500/20 mb-4">{process.step}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{process.title}</h4>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-purple-500/10 via-magenta-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Create Your Next Big Campaign?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to produce ad films that captivate audiences and drive measurable results for your brand.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                GET STARTED TODAY
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}