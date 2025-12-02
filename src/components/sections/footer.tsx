import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="group relative w-fit text-base text-text-primary transition-colors hover:text-text-primary"
  >
    {children}
    <span className="absolute bottom-[-2px] left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-background font-body text-white">
      <div className="container px-6 pt-32 pb-10 md:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-20 xl:gap-x-32">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-x-20">
            {/* Navigation */}
            <div className="flex flex-col gap-6">
              <h6 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
                Navigation
              </h6>
              <nav className="flex flex-col gap-4">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about-us">About us</FooterLink>
                <FooterLink href="/events">Events</FooterLink>
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6">
              <h6 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
                Services
              </h6>
              <nav className="flex flex-col gap-4">
                <FooterLink href="/ad-films">Ad Films</FooterLink>
                <FooterLink href="/marketing">Marketing</FooterLink>
                <FooterLink href="/entertainment">Entertainment</FooterLink>
              </nav>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6">
              <h6 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
                Socials
              </h6>
              <nav className="flex flex-col gap-4">
                <FooterLink href="https://www.instagram.com/__anandgroup?igsh=MTZmOXBvYTY0OGkyNQ==">Instagram</FooterLink>
              </nav>
            </div>
          </div>

          <div className="my-12 hidden h-auto w-px self-stretch bg-border lg:block"></div>

          <div className="mt-12 max-w-md flex-shrink-0 lg:mt-0">
            <div className="flex flex-col gap-6">
              <h6 className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-text-muted">
                Stay Informed
              </h6>
              <p className="text-base leading-relaxed text-text-secondary">
                Join our creative community to stay connected with the latest updates. Subscribe to Anand now!
              </p>
              <form className="mt-2 flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full flex-grow appearance-none rounded-full border border-border bg-transparent px-6 py-4 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-4 text-sm font-medium uppercase text-black transition-opacity hover:opacity-80"
                >
                  Subscribe
                  <ArrowRight size={14} className="translate-y-px" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-border"></div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-6 text-sm text-text-muted md:flex-row">
          <p>© Anand. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;