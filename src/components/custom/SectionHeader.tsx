// ── SectionHeader.tsx ─────────────────────────────────────────────────────────
// A reusable section header component matching your site's design language.
// Usage: drop this into any section to get a consistent header style.
//
// Props:
//   label      – small uppercase eyebrow text  (e.g. "Meet The Team")
//   title      – main heading plain part        (e.g. "People behind")
//   accent     – teal-coloured part of heading  (e.g. "our excellence")
//   subtitle   – optional paragraph below       (e.g. "Empowering your…")
//   align      – "left" | "center"  (default "left")

interface SectionHeaderProps {
  label: string;
  title: string;
  accent: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  accent,
   align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-8 sm:mb-10 md:mb-10 ${isCenter ? "text-center" : "text-left"}`}
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Eyebrow label */}
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#059587] font-bold mb-1.5 sm:mb-[-2]">
        {label}
      </p>

      {/* Main heading */}
      <h2
        className={`text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-thin tracking-tight text-foreground flex flex-wrap gap-x-2 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
        style={{ letterSpacing: "-0.03em" }}
      >
        {title}
        <span className="text-[#059587]">{accent}</span>
      </h2>

      {/* Optional subtitle */}
       
    </div>
  );
}


// ── USAGE EXAMPLES ─────────────────────────────────────────────────────────────
// Copy the <SectionHeader … /> line into each section and swap the props.
//
// About section:
//   <SectionHeader
//     label="Who We Are"
//     title="About"
//     accent="us"
//     subtitle="At our firm, we pride ourselves on delivering tailored solutions that empower businesses to thrive."
//   />
//
// Contact section:
//   <SectionHeader
//     label="Get In Touch"
//     title="Contact"
//     accent="us"
//     subtitle="Let us know how to get back to you."
//   />
//
// Services section:
//   <SectionHeader
//     label="What We Offer"
//     title="Our"
//     accent="Services"
//     subtitle="Empowering your lifestyle with cutting-edge technology solutions"
//   />
//
// Team section:
//   <SectionHeader
//     label="Meet The Team"
//     title="People behind"
//     accent="our excellence"
//   />
//
// Any other section — just swap label / title / accent / subtitle as needed.