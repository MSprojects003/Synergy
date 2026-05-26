"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

import about1 from "@/assets/aboutPic/image.png";
import about2 from "@/assets/aboutPic/image1.png";
import { SectionHeader } from "./SectionHeader";
// ── Counter hook ──────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Single animated stat ──────────────────────────────────────────────────────
interface StatProps {
  val: string;
  lbl: string;
  animate: boolean;
}

function AnimatedStat({ val, lbl, animate }: StatProps) {
  // Splits "Rs.10m" → prefix="Rs.", numeric=10, suffix="m"
  // Splits "95%"   → prefix="",    numeric=95, suffix="%"
  // Splits "10+"   → prefix="",    numeric=10, suffix="+"
  const match = val.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = parseFloat(match?.[2] ?? "0");
  const suffix = match?.[3] ?? "";

  const count = useCountUp(numeric, 1800, animate);

  return (
    <div>
      <p
        className="text-3xl font-extrabold text-gray-900 leading-none mb-1 tabular-nums"
        style={{ letterSpacing: "-0.04em" }}
      >
        {prefix}{count}{suffix}
      </p>
      <p className="text-[0.72rem] text-gray-400 leading-snug max-w-[120px] font-normal">
        {lbl}
      </p>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { val: "95%",    lbl: "Complete customer satisfaction" },
  { val: "10+",    lbl: "Innovation and valuable insight" },
  { val: "Rs.10m", lbl: "Highly efficient financial strategies" },
];

const features = [
  "Measurable proven results",
  "Innovative real solutions",
  "Customized hiring strategies",
  "Reliable expert guidance",
  "Multi-industry expertise",
  "Support for long-term growth",
];

// ── Main component ────────────────────────────────────────────────────────────
export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Fire animation once when stats row scrolls into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      className="bg-[#f5f6f800] p-4 md:p-6 font-sans"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* ── TOP CARD ── */}
      <Card className="max-w-6xl mx-auto mb-4 rounded-2xl border-0 shadow-none overflow-hidden">
        <CardContent className="p-0">
          {/* Desktop: Standard grid layout (unchanged) */}
          <div className="hidden md:grid md:grid-cols-2 gap-0">

            {/* Left — Text */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <SectionHeader label="WHO WE ARE" title="About" accent="us" align="left" />

              <p className="text-sm md:text-base text-left text-[#066057] leading-relaxed mb-4 font-light">
                We are a dynamic facility management and workforce solutions provider committed to transforming how businesses manage their operations through modern, compliance-focused practices. Our team of industry experts is driven by a passion for delivering high-quality, technology-enabled solutions that support both day-to-day operations and long-term strategic goals.
              </p>

              <p className="text-sm md:text-base text-left text-[#066057] leading-relaxed mb-6 font-light">
                We don't just supply people or services. We deliver tailored, end-to-end workforce and facility management strategies that enhance efficiency, ensure legal compliance, and create sustainable value. By empowering both businesses and workers, we strive to build strong partnerships and develop a future-ready workforce capable of supporting evolving organizational needs.
              </p>

              <div className="flex items-center gap-3 flex-wrap mb-6">
                <Button
                  className="rounded-full bg-[#059587] hover:bg-[#0d5d55] text-white text-sm font-semibold px-6 h-10 gap-2 shadow-none"
                  asChild
                >
                  <a href="#careers">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-[#059587] text-[#059587] text-sm font-semibold px-6 h-10 hover:bg-[#059587] hover:text-white shadow-none"
                  asChild
                >
                  <a href="#contact">Contact us</a>
                </Button>
              </div>

              <Separator className="my-6 bg-gray-200" />

              <div ref={statsRef} className="flex text-left gap-6 md:gap-10 flex-row font-light">
                {stats.map((s) => (
                  <AnimatedStat
                    key={s.val}
                    val={s.val}
                    lbl={s.lbl}
                    animate={hasAnimated}
                  />
                ))}
              </div>
            </div>

            {/* Right — Image with Teal Background */}
            <div className="bg-[#059587] min-h-[500px] relative flex flex-col justify-between p-6 md:p-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={about1} 
                  alt="About" 
                  className="w-full h-auto object-cover rounded-lg max-w-sm"
                />
              </div>

              {/* Purpose Statement */}
              <div className="mt-12 text-left">
                <p className="text-white text-left italic font-semibold text-base md:text-lg mb-4">
                  Purpose Statement
                </p>
                <p className="text-white italic text-sm md:text-base font-light leading-relaxed">
                  To bridge operational gaps by delivering flexible, tech-enabled facility management and workforce solutions that ensure reliability, efficiency, and full statutory compliance.
                </p>
              </div>
            </div>

          </div>

          {/* Mobile: Custom flex layout with order (new mobile-only changes) */}
          <div className="md:hidden flex flex-col gap-0">

            {/* MOBILE ONLY: 1. Title */}
            <div className="order-1 p-3">
              <SectionHeader label="WHO WE ARE" title="About" accent="us" align="left" />
            </div>

            {/* MOBILE ONLY: 2. Image with Blue Background */}
            <div className="order-2 bg-[#059587] min-h-[300px] relative flex flex-col justify-between p-6">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src={about1} 
                  alt="About" 
                  className="w-full h-auto object-cover rounded-lg max-w-sm"
                />
              </div>

              <div className="mt-8 text-left">
                <p className="text-white text-left italic font-semibold text-base mb-4">
                  Purpose Statement
                </p>
                <p className="text-white italic text-sm font-light leading-relaxed">
                  To bridge operational gaps by delivering flexible, tech-enabled facility management and workforce solutions that ensure reliability, efficiency, and full statutory compliance.
                </p>
              </div>
            </div>

            {/* MOBILE ONLY: 3. Content Paragraphs */}
            <div className="order-3 p-3">
              <p className="text-sm text-left text-[#066057] leading-relaxed mb-4 font-light">
                We are a dynamic facility management and workforce solutions provider committed to transforming how businesses manage their operations through modern, compliance-focused practices. Our team of industry experts is driven by a passion for delivering high-quality, technology-enabled solutions that support both day-to-day operations and long-term strategic goals.
              </p>

              <p className="text-sm text-left text-[#066057] leading-relaxed mb-6 font-light">
                We don't just supply people or services. We deliver tailored, end-to-end workforce and facility management strategies that enhance efficiency, ensure legal compliance, and create sustainable value. By empowering both businesses and workers, we strive to build strong partnerships and develop a future-ready workforce capable of supporting evolving organizational needs.
              </p>
            </div>

            {/* MOBILE ONLY: 4. Buttons & Stats */}
            <div className="order-4 pl-2 pr-3 py-6">
              <div className="flex items-center gap-3 flex-wrap mb-6">
                <Button
                  className="rounded-full bg-[#059587] hover:bg-[#0d5d55] text-white text-sm font-semibold px-6 h-10 gap-2 shadow-none"
                  asChild
                >
                  <a href="#careers">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-[#059587] text-[#059587] text-sm font-semibold px-6 h-10 hover:bg-[#059587] hover:text-white shadow-none"
                  asChild
                >
                  <a href="#contact">Contact us</a>
                </Button>
              </div>

              <Separator className="mb-6 bg-gray-200" />

              <div ref={statsRef} className="flex text-left gap-6 flex-row font-light">
                {stats.map((s) => (
                  <AnimatedStat
                    key={s.val}
                    val={s.val}
                    lbl={s.lbl}
                    animate={hasAnimated}
                  />
                ))}
              </div>
            </div>

          </div>

        </CardContent>
      </Card>

      {/* ── BOTTOM CARD ── */}
      <Card className="max-w-6xl mx-auto rounded-2xl border-0 shadow-none overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Left — Image */}
            <div className="h-56 md:h-auto min-h-[300px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              
                <img src={about2} alt="Team" className="w-full h-full object-cover" />
             
              <svg className="w-16 h-16 text-slate-400 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>

            {/* Right — Text + Features */}
            <div className="p-2 md:p-10 flex flex-col justify-center">
              <h2
                className="text-2xl text-left md:text-3xl font-thin tracking-tight leading-tight text-[#059587] mb-3"
                style={{ letterSpacing: "-0.025em" }}
              >
                Unlock our expertise to drive success across industries.
              </h2>

              <p className="text-sm text-left text-[#066057] leading-relaxed mb-6">
                Leverage our deep industry knowledge and innovative strategies to
                accelerate your business growth. Our tailored solutions ensure
                success across diverse sectors by addressing your unique
                challenges and opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 flex-shrink-0" />
                    <span className="text-[0.8rem] font-semibold text-gray-800">{f}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </section>
  );
}

