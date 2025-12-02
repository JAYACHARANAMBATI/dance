"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Calendar, Users, Mail, Phone, MessageSquare, Building2, Clock, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

export default function PlanEventPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      eventType: formData.get("eventType") as string,
      attendees: formData.get("attendees") as string,
      eventDate: formData.get("date") as string,
      budget: formData.get("budget") as string || undefined,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/event-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit event request");
      }

      toast.success("Event request submitted successfully! We'll contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h6 className="tracking-[0.3em] uppercase text-[9px] text-muted-foreground">
              Let's Create Magic
            </h6>
            <h1 className="font-display font-bold uppercase text-5xl lg:text-7xl text-white">
              PLAN YOUR EVENT
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your vision and we'll bring it to life. Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Event Details</h2>
                <p className="text-muted-foreground">Share your event requirements with us</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-white text-sm font-medium mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="entertainment">Entertainment Event</option>
                    <option value="social">Social Celebration</option>
                    <option value="conference">Conference</option>
                    <option value="concert">Concert/Festival</option>
                    <option value="gala">Gala/Awards</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Expected Attendees */}
                <div>
                  <label htmlFor="attendees" className="block text-white text-sm font-medium mb-2">
                    Expected Attendees *
                  </label>
                  <select
                    id="attendees"
                    name="attendees"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-250">101-250</option>
                    <option value="251-500">251-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="date" className="block text-white text-sm font-medium mb-2">
                    Preferred Event Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5L">Under ₹5,00,000</option>
                    <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                    <option value="10L-25L">₹10,00,000 - ₹25,00,000</option>
                    <option value="25L-50L">₹25,00,000 - ₹50,00,000</option>
                    <option value="50L-1Cr">₹50,00,000 - ₹1,00,00,000</option>
                    <option value="1Cr+">₹1,00,00,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-purple-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Describe your event vision, requirements, and any special requests..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 h-9 bg-magenta-500 hover:bg-magenta-600 text-white font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll review your request and get back to you within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-purple-500/10 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="text-white font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-white font-medium">anandgroup.us@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Office</p>
                      <p className="text-white font-medium">Jubilee Hills, Hyderabad, India</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Business Hours</p>
                      <p className="text-white font-medium">Mon - Sat: 9AM - 8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-8 rounded-2xl border border-border/40 bg-card">
                <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
                
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Initial Consultation",
                      description: "We'll schedule a call to discuss your vision and requirements"
                    },
                    {
                      step: "2",
                      title: "Custom Proposal",
                      description: "Receive a detailed proposal with timeline and budget breakdown"
                    },
                    {
                      step: "3",
                      title: "Planning & Execution",
                      description: "Our team handles every detail from concept to completion"
                    },
                    {
                      step: "4",
                      title: "Your Perfect Event",
                      description: "Sit back and enjoy a flawlessly executed event"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-400 font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}