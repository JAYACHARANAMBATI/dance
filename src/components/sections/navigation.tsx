"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Heart, ShoppingBag, Film, Calendar, TrendingUp, Mic, MessageSquare, Sparkles, Users, Home } from "lucide-react";
import { MenuBar } from "@/components/ui/glow-menu";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
{
  href: "/",
  label: "HOME",
  icon: Home,
  gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
  iconColor: "text-purple-400"
},
{
  href: "/ad-films",
  label: "AD FILMS",
  icon: Film,
  gradient: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(109,72,196,0.06) 50%, rgba(79,52,146,0) 100%)",
  iconColor: "text-purple-500"
},
{
  href: "/events",
  label: "EVENTS",
  icon: Calendar,
  gradient: "radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(187,40,209,0.06) 50%, rgba(157,10,179,0) 100%)",
  iconColor: "text-magenta-500"
},
{
  href: "/marketing",
  label: "MARKETING",
  icon: TrendingUp,
  gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  iconColor: "text-blue-500"
},
{
  href: "/entertainment",
  label: "ENTERTAINMENT",
  icon: Sparkles,
  gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
  iconColor: "text-pink-500"
}];


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getActiveItem = () => {
    const currentLink = navLinks.find((link) => link.href === pathname);
    return currentLink?.label || "";
  };

  const [activeItem, setActiveItem] = useState(getActiveItem());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [pathname]);

  const handleMenuItemClick = (label: string) => {
    const link = navLinks.find((l) => l.label === label);
    if (link) {
      setActiveItem(label);
      router.push(link.href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      {/* Top bar with logo and icons */}
      <div className="border-b border-white/10 !bg-white !opacity-100 !opacity-[0.76]">
        <div className="container mx-auto flex h-[72px] items-center justify-center relative">
          {/* Logo and text centered */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/302f2eb8-c880-421b-a1bb-6288ea042554/visual-edit-uploads/1764251147818-iqmwd3t68ai.jpg"
                alt="Anand Group Logo"
                width={56}
                height={56}
                className="object-cover !w-[52px] !h-[53px] !max-w-[52px]" />
            </div>
            <span className="text-lg font-light tracking-[9.5px] !opacity-100 !bg-transparent !border-slate-100 !text-black">ANAND GROUP</span>
          </Link>

          {/* Icons positioned absolutely on the right */}
          <div className="absolute right-0 flex items-center gap-4 lg:gap-6">
            <button className="text-white hover:opacity-60 transition-opacity" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-white hover:opacity-60 transition-opacity" aria-label="Account">
              <User size={20} />
            </button>
            <button className="text-white hover:opacity-60 transition-opacity" aria-label="Favorites">
              <Heart size={20} />
            </button>
            <button className="text-white hover:opacity-60 transition-opacity" aria-label="Shopping Bag">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar with glow menu */}
      <nav className="w-full">
        <MenuBar
          items={navLinks.map((link) => ({
            label: link.label,
            gradient: link.gradient,
            icon: link.icon,
            iconColor: link.iconColor,
            href: link.href
          }))}
          activeItem={activeItem}
          onItemClick={handleMenuItemClick} className="!text-[9px]" />

      </nav>
    </header>);

};

export default Navigation;