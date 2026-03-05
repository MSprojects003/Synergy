"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Facebook,   MailCheck, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call our support center",
    detail: "+94 76 2146 244",
  },
  {
    icon: Mail,
    title: "Email our support center",
    detail: "synergyfmservices@gmail.com",
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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const formData = new FormData(e.target as HTMLFormElement);

      // Optional: add extra fields if you want
      // formData.append("from_name", `${form.firstName} ${form.lastName}`);
      // formData.append("subject", form.subject);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const json = await response.json();

      if (json.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent.");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f0f4f800] min-h-screen p-4 md:p-10 flex items-center justify-center"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LEFT PANEL - unchanged */}
        <div className="flex flex-col gap-4">
          <Card className="rounded-2xl border-0 shadow-none overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-48 bg-slate-200 overflow-hidden">
             
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7920.6863201921!2d79.91336145025052!3d6.968782119493024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581de3230199%3A0xd3f291b0a1cf61ec!2s382%20Old%20Kandy%20Rd%2C%20Kelaniya%2011300!5e0!3m2!1sen!2slk!4v1772720396272!5m2!1sen!2slk" width="100%" height="100%"     style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen  ></iframe>
              </div>
            </CardContent>
          </Card>
          <hr />

          <Card className="rounded-2xl border-0 shadow-none">
            <CardContent className="p-6 flex flex-col gap-5">
              <div>
                <h3 className="text-2xl text-left font-thin text-gray-900 mb-1">
                  Our Location to Head Quarter
                </h3>
                <p className="text-sm text-gray-500 text-left font-thin leading-relaxed">
                   No 391/1, Dalugamgoda,
                   Old Kandy road, Kelaniya,
                    Sri Lanka 
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

              <div className="flex gap-2 pt-1">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1HbFa3k3PW/" },
                  { icon: MailCheck, href: "mailto:synergyfmservices@gmail.com" },
                  { icon: MessageCircle, href: "https://wa.me/+94762146244" },
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

        {/* RIGHT PANEL - Form with Web3Forms */}
        <Card className="rounded-2xl border-0 py-4 pb-4 shadow-sm h-fit">
          <CardContent className="p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              {/* Hidden Access Key – REPLACE THIS */}
              <input
                type="hidden"
                name="access_key"
                value="ecd76787-8f56-47a0-a129-2becbe3e7c7e" // ← Paste your real key here
              />

              {/* Optional: helps organize emails better */}
              <input type="hidden" name="subject" value={form.subject || "New Contact Query"} />
              <input type="hidden" name="from_name" value={`${form.firstName} ${form.lastName}`} />

              <div>
                <h2 className="text-2xl font-thin text-left text-gray-900 mb-1">
                  Send us your Query here
                </h2>
                <p className="text-sm text-left font-thin text-gray-400">
                  Let us know how to get back to you.
                </p>
              </div>

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

              <div>
                <h2 className="text-2xl font-thin text-left text-gray-900 mb-1">
                  How can we help?
                </h2>
                <p className="text-sm font-thin text-left text-gray-400">
                  Feel free to ask a question or simply leave a comment.
                </p>
              </div>

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
                  className="rounded-lg border-gray-200 text-sm resize-none focus-visible:ring-gray-800"
                />
              </div>

              {/* Status message */}
              {status !== "idle" && (
                <div
                  className={`text-sm p-3 rounded ${
                    status === "success"
                      ? "bg-green-100 text-green-800"
                      : status === "error"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {status === "loading" ? "Sending..." : message}
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-fit rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold px-7 h-10 shadow-none"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}