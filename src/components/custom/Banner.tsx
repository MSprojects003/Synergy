 
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function Banner() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2070')`,
        // Good alternatives (darker / more professional feel):
        // 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2080'
        // 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content – full width on mobile, constrained + padded on desktop */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-0">
        <div className="mx-auto max-w-5xl text-left md:text-left">
          {/* Headline with white text + white stroke outline */}
          <h1
            className={`
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold 
              text-white 
              leading-tight 
              tracking-tight 
              mb-6 md:mb-10
              [-webkit-text-stroke:1.5px_white] 
              text-stroke-[1.5px] 
              text-stroke-white
            `}
            style={{
              // Fallback for browsers that don't support -webkit-text-stroke well
              textShadow: "0 0 12px rgba(0,0,0,0.8)",
            }}
          >
            Welcome to SFMS
            <br className="sm:hidden md:block" />
            <span className="text-[#18181808] [-webkit-text-stroke:1px_white] text-stroke-[1px] text-stroke-white">
              Build Your Future
            </span>{" "}
            With Us
          </h1>

          {/* Subtext – lighter, no stroke needed */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100/95 mb-8 md:mb-12 max-w-3xl font-light leading-relaxed">
            Join a team that values innovation, collaboration, and growth. 
            Discover exciting career opportunities and shape your future today.
          </p>

          {/* Buttons – stack on very small screens, side-by-side otherwise */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button
              size="lg"
              className="text-base sm:text-lg px-7 sm:px-9 border-primary border-2  sm:py-6 
                         bg-primary hover:bg-primary/90 
                         text-white font-semibold shadow-md hover:shadow-lg 
                         transition-all duration-300"
            >
              Explore Careers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-7 sm:px-9 py-5 sm:py-6 
                         border-2 border-white/70 text-white bg-white/10
                         hover:bg-white hover:border-white 
                           transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}