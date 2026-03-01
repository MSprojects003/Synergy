"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
      className="bg-[#f5f6f800] p-2 md:p-6 font-sans"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');`}</style>

      {/* ── TOP CARD ── */}
      <Card className="max-w-6xl mx-auto mb-4 rounded-2xl border-0 shadow-none overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Left — Text */}
            <div className="p-2 md:p-8 flex flex-col justify-left order-2 md:order-1">
              <h1
                className="text-3xl ml-0 text-left md:text-4xl font-thin tracking-tight leading-tight text-gray-900 mb-3"
                style={{ letterSpacing: "-0.03em" }}
              >
                About us
              </h1>

              <p className="text-sm text-left text-gray-500 leading-relaxed mb-6 max-w-sm">
                At our firm, we pride ourselves on delivering tailored solutions
                that empower businesses to thrive. With years of experience across
                various industries, our dedicated team is committed to driving
                growth and operational excellence.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  className="rounded-full bg-gray-900 hover:bg-gray-950 text-white text-sm font-bold px-5 h-10 gap-1.5 shadow-none"
                  asChild
                >
                  <a href="#contact">
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 text-gray-800 text-sm font-semibold px-5 h-10 hover:bg-gray-50 shadow-none"
                  asChild
                >
                  <a href="#jobs">Contact us</a>
                </Button>
              </div>

              <Separator className="my-6 bg-gray-100" />

              {/* ── Animated Stats ── */}
              <div ref={statsRef} className="flex text-left md:gap-8 flex-row sm:gap-4 font-thin">
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

            {/* Right — Image */}
            <div className="order-1 md:order-2 h-56 md:h-auto min-h-[300px] bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              {/*
                Replace with your actual image:
                <img src="/about-hero.jpg" alt="About" className="w-full h-full object-cover" />
              */}
              <svg className="w-16 h-16 text-slate-400 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
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
              {/*
                Replace with your actual image:
                <img src="/about-team.jpg" alt="Team" className="w-full h-full object-cover" />
              */}
              <svg className="w-16 h-16 text-slate-400 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>

            {/* Right — Text + Features */}
            <div className="p-2 md:p-10 flex flex-col justify-center">
              <h2
                className="text-2xl text-left md:text-3xl font-thin tracking-tight leading-tight text-gray-900 mb-3"
                style={{ letterSpacing: "-0.025em" }}
              >
                Unlock our expertise to drive success across industries.
              </h2>

              <p className="text-sm text-left text-gray-500 leading-relaxed mb-6">
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