import React, { useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    department: "Leadership",
    initials: "AC",
    bio: "Visionary leader with 15+ years driving operational excellence and strategic growth.",
    color: "bg-[#059587]",
  },
  {
    name: "Marcus Williams",
    role: "Head of Operations",
    department: "Operations",
    initials: "MW",
    bio: "Expert in streamlining complex logistics and workforce management solutions.",
    color: "bg-[#066057]",
  },
  {
    name: "Priya Nair",
    role: "Facility Solutions Manager",
    department: "Facilities",
    initials: "PN",
    bio: "Dedicated to delivering world-class janitorial and facility management services.",
    color: "bg-[#0a7a6d]",
  },
  {
    name: "James Harrington",
    role: "Client Relations Director",
    department: "Client Success",
    initials: "JH",
    bio: "Committed to building long-term partnerships and ensuring client satisfaction.",
    color: "bg-[#048a7c]",
  },
  {
    name: "Sofia Ramirez",
    role: "Compliance & Safety Lead",
    department: "Compliance",
    initials: "SR",
    bio: "Ensures all operations meet regulatory standards with meticulous attention to detail.",
    color: "bg-[#059587]",
  },
  {
    name: "David Okafor",
    role: "Workforce Planning Manager",
    department: "HR",
    initials: "DO",
    bio: "Specializes in building and deploying verified, skilled teams across logistics operations.",
    color: "bg-[#066057]",
  },
]

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return

    // Determine card width based on visible cards
    const cardWidth = container.offsetWidth / getVisibleCount()
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth

    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 4
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.scrollWidth / teamMembers.length
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(index)
  }

  return (
    <section id="our-team" className="py-16 md:py-20 bg-background">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-[#059587]">
              Our Team
            </h2>
            <p className="mt-3 md:mt-4 text-lg md:text-xl text-[#066057] font-thin max-w-3xl">
              The dedicated professionals behind our commitment to excellence
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full border-[#059587] text-[#059587] hover:bg-[#059587] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full border-[#059587] text-[#059587] hover:bg-[#059587] hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <Card className="group relative overflow-hidden cursor-pointer border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Top accent bar */}
                <div className={`h-1 w-full ${member.color}`} />

                <CardContent className="p-6 flex flex-col items-center text-center gap-4">

                  {/* Avatar */}
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center
                    text-white text-2xl font-semibold ${member.color}
                    ring-4 ring-offset-2 ring-offset-background ring-[#05958720]
                    transition-transform duration-300 group-hover:scale-105
                  `}>
                    {member.initials}
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#059587] font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Department Badge */}
                  <Badge
                    variant="secondary"
                    className="text-xs bg-[#05958715] text-[#059587] border border-[#05958730] hover:bg-[#05958725]"
                  >
                    {member.department}
                  </Badge>

                  {/* Divider */}
                  <div className="w-10 h-px bg-[#05958740]" />

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollRef.current
                if (!container) return
                const cardWidth = container.scrollWidth / teamMembers.length
                container.scrollTo({ left: cardWidth * index, behavior: "smooth" })
                setActiveIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-[#059587]"
                  : "w-2 bg-[#05958740]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}