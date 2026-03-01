"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Facebook, Twitter, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call our support center",
    detail: "+52656-565-560",
  },
  {
    icon: Mail,
    title: "Email our support center",
    detail: "support@spark.com",
  },
  {
    icon: MessageSquare,
    title: "Chat with support team",
    detail: "Link can be found below",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <section
      id="contact"
      className="bg-[#f0f4f800] min-h-screen p-4 md:p-10 flex items-center justify-center"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* ── LEFT PANEL ── */}
        <div className="flex flex-col gap-4">

          {/* Map */}

          <Card className="rounded-2xl border-0 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-48 bg-slate-200 overflow-hidden">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.690732217544!2d-0.02327!3d51.50501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b9a65c4249%3A0x2e77e6f6d00b9b5e!2sOne%20Canada%20Square!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
                />
              </div>
            </CardContent>
          </Card>
          <hr />

          {/* Location + Contact Details */}
          <Card className="rounded-2xl border-0 shadow-none">
            <CardContent className="p-6 flex flex-col gap-5">
              <div>
                <h3 className="text-2xl text-left font-thin text-gray-900 mb-1">
                  Our Location to Head Quarter
                </h3>
                <p className="text-sm text-gray-500 text-left font-thin leading-relaxed">
                  Level 9, One Canada Square, Canary Wharf, E14 5AA, London.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gray-900" />
                    </div>
                    <div>
                      <p className="text-sm font-700 font-bold text-gray-800 leading-tight">
                        {title}
                      </p>
                      <p className="text-xs text-left font-thin text-gray-500 mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-2 pt-1">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-900" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── RIGHT PANEL ── */}
        <Card className="rounded-2xl border-0 py-4 pb-4 shadow-sm h-fit">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Section 1 — Query */}
              <div>
                <h2 className="text-2xl font-thin text-left text-gray-900 mb-1">
                  Send us your Query here
                </h2>
                <p className="text-sm text-left font-thin text-gray-400">
                  Let us know how to get back to you.
                </p>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">
                    First Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 text-sm h-10 focus-visible:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700">
                    Last Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 text-sm h-10 focus-visible:ring-blue-400"
                  />
                </div>
              </div>

              {/* Email + Subject row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
                    Email Address <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 text-sm h-10 focus-visible:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="subject" className="text-xs font-semibold text-gray-700">
                    Subject <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Issue Here"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-gray-200 text-sm h-10 focus-visible:ring-blue-400"
                  />
                </div>
              </div>
              
              <hr />
              

              {/* Section 2 — Help */}
              <div >
                <h2 className="text-2xl font-thin text-left text-gray-900 mb-1">
                  How can we help?
                </h2>
                <p className="text-sm font-thin text-left text-gray-400">
                  Feel free to ask a question or simply leave a comment.
                </p>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message" className="text-xs font-semibold text-gray-700">
                  Comments / Questions <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Add text..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-lg border-gray-200 text-sm resize-none border-1 focus-visible:ring-gray-800"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-fit rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-7 h-10 shadow-none"
              >
                Send Message
              </Button>

            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}