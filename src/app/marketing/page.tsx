import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { TrendingUp, Target, BarChart3, Megaphone, Search, LineChart, Mail, Share2, Code, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground">
              Strategy & Growth
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              MARKETING
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic marketing solutions that amplify your brand and drive engagement. We combine data-driven insights with creative excellence to deliver measurable results.
            </p>
          </div>

          {/* Strategy Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-blue-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Digital Marketing Strategy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">DIGITAL STRATEGY</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-sm uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growth Marketing</span>
                </div>
                <h3 className="text-2xl font-bold text-white">360° Digital Campaigns</h3>
                <p className="text-muted-foreground">Integrated marketing strategies across all digital channels for maximum impact</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-purple-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                  alt="Brand Strategy"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">BRAND BUILDING</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Brand Strategy</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Brand Positioning</h3>
                <p className="text-muted-foreground">Building powerful brands that resonate with your target audience</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-cyan-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Web Development"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-cyan-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">DEVELOPMENT</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-sm uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>Web Solutions</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Web Development</h3>
                <p className="text-muted-foreground">Custom websites and web applications built with cutting-edge technology for optimal performance</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-orange-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Home Loans"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-orange-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">HOME LOANS & REAL ESTATE</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 text-sm uppercase tracking-wider">
                  <Home className="w-4 h-4" />
                  <span>Home Loans & Real Estate</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Home Loans & Real Estate</h3>
                <p className="text-muted-foreground">Comprehensive home financing solutions with competitive rates and personalized support</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover:border-magenta-500/50 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80"
                  alt="Talk Show Production"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-magenta-500/80 backdrop-blur-sm rounded-full">
                  <span className="text-white font-semibold text-sm">BROADCASTING</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-magenta-400 text-sm uppercase tracking-wider">
                  <Megaphone className="w-4 h-4" />
                  <span>Talk Show</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Talk Show</h3>
                <p className="text-muted-foreground">Comedy with celebrity interviews and engaging panel discussions</p>
                <p className="text-muted-foreground">Celebrity comedy, new movie highlights, and movie comedy reviews</p>
              </div>
            </div>
          </div>

          {/* Marketing Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Our Expertise
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Comprehensive Marketing Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "SEO & SEM",
                  description: "Dominate search results with optimized content and strategic paid campaigns that drive qualified traffic.",
                  color: "blue"
                },
                {
                  icon: Share2,
                  title: "Social Media Marketing",
                  description: "Engaging social strategies that build communities and turn followers into loyal brand advocates.",
                  color: "purple"
                },
                {
                  icon: Mail,
                  title: "Content Marketing",
                  description: "Compelling content that tells your story and nurtures relationships throughout the customer journey.",
                  color: "magenta"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border/40 bg-gradient-to-b from-card to-transparent hover:border-blue-500/50 transition-all duration-300"
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

          {/* Marketing Channels */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h6 className="tracking-[0.3em] uppercase text-xs text-muted-foreground mb-4">
                Multi-Channel Approach
              </h6>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                We Market Where Your Audience Is
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Megaphone, title: "Paid Advertising", description: "Google Ads, Facebook Ads, and programmatic campaigns" },
                { icon: LineChart, title: "Analytics & Insights", description: "Data-driven decisions backed by comprehensive reporting" },
                { icon: Target, title: "Audience Targeting", description: "Precision targeting to reach your ideal customers" },
                { icon: BarChart3, title: "Performance Marketing", description: "Results-focused campaigns optimized for conversions" },
                { icon: Share2, title: "Influencer Marketing", description: "Strategic partnerships with relevant influencers" },
                { icon: TrendingUp, title: "Growth Hacking", description: "Innovative strategies for rapid, sustainable growth" }
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-400" />
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
          <div className="text-center p-16 rounded-2xl border border-border/40 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to create marketing strategies that deliver real, measurable business results.
            </p>
            <Link href="/plan-event">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                START YOUR CAMPAIGN
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}