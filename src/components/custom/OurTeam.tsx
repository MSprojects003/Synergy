import  { useRef, useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import member1 from "@/assets/team/ceo.png"
import member2 from "@/assets/team/person2.png"
import member3 from "@/assets/team/person3.png"
import member4 from "@/assets/team/person4.png"

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    department: "Leadership",
    initials: "AC",
    image: member1,
    bio: "Visionary leader with 15+ years driving operational excellence and strategic growth.",
    color: "#059587",
  },
  {
    name: "Marcus Williams",
    role: "Head of Operations",
    department: "Operations",
    initials: "MW",
    image: member2,
    bio: "Expert in streamlining complex logistics and workforce management solutions.",
    color: "#066057",
  },
  {
    name: "Priya Nair",
    role: "Facility Solutions Manager",
    department: "Facilities",
    initials: "PN",
    image: member3,
    bio: "Dedicated to delivering world-class janitorial and facility management services.",
    color: "#0a7a6d",
  },
  {
    name: "James Harrington",
    role: "Client Relations Director",
    department: "Client Success",
    initials: "JH",
    image: member4,
    bio: "Committed to building long-term partnerships and ensuring client satisfaction.",
    color: "#048a7c",
  },
]

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const DESKTOP_THRESHOLD = 4

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const showCarousel = isMobile || teamMembers.length > DESKTOP_THRESHOLD

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return
    const card = container.querySelector('[data-card]') as HTMLElement
    const cardWidth = card ? card.offsetWidth + 24 : 300
    container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" })
  }

  return (
    <section id="our-team" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 md:mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#059587] font-medium mb-2">
              Meet The Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground">
              People behind
              <span className="block text-[#059587]">our excellence</span>
            </h2>
          </div>

          {showCarousel && (
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="rounded-full w-9 h-9 sm:w-10 sm:h-10 border-[#059587]/40 text-[#059587] hover:bg-[#059587] hover:text-white hover:border-[#059587] transition-all duration-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="rounded-full w-9 h-9 sm:w-10 sm:h-10 border-[#059587]/40 text-[#059587] hover:bg-[#059587] hover:text-white hover:border-[#059587] transition-all duration-200"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Cards */}
        {showCarousel ? (
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-card
                className="snap-start shrink-0 w-[75vw] sm:w-[42vw] md:w-[30vw] lg:w-[calc(25%-18px)]"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="group flex flex-col hover:-translate-y-1 transition-all duration-300 h-full">

      {/* Fixed uniform image box — all cards same height */}
<div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-xl">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-light"
            style={{ backgroundColor: member.color }}
          >
            {member.initials}
          </div>
        )}

        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Department badge 
        <div className="absolute top-3 left-3">
          <span
            className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2 sm:px-2.5 py-1 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: member.color + 'cc' }}
          >
            {member.department}
          </span>
        </div> */}
      </div>

      {/* Accent line */}
      <div
        className="h-[2px] w-10 mt-3 rounded-full"
        style={{ backgroundColor: member.color }}
      />

      {/* Text */}
      <div className="pt-2.5 pb-4 flex flex-col gap-1">
        <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight tracking-tight">
          {member.name}
        </h3>
        <p className="text-xs sm:text-sm font-medium" style={{ color: member.color }}>
          {member.role}
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mt-1">
          {member.bio}
        </p>
      </div>

    </div>
  )
}