import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import member1 from "@/assets/team/ceo.png"
import member2 from "@/assets/team/person2.png"
import member3 from "@/assets/team/person3.png"
import member4 from "@/assets/team/person4.png"

const teamMembers = [
  {
    name: "Yasiru Rathnayaka",
    role: "Founder / Director",
    department: "Leadership",
    initials: "AC",
    image: member1,
    bio: "Extensive background in Administration & Facility Management with top corporate groups 15 years of private-sector experience",
    color: "#059587",
  },
  {
    name: "Himasha Peiris",
    role: "Director / secretary",
    department: "Operations",
    initials: "MW",
    image: member2,
    bio: "Attorney at-Law, (LL.B Hons) University of Peradeniya , Dip. in Forensic Medicine,University of Peradeniya",
    color: "#066057",
  },
  {
    name: "Heshan Jayasinghe",
    role: "Strategic Growth Consultant",
    department: "Facilities",
    initials: "PN",
    image: member3,
    bio: "Master of Business Administration PIM-SJP, B.Sc. (Hons) in Transport & Logistics Management University of Moratuwa",
    color: "#0a7a6d",
  },
  {
    name: "Sithara Buddhini",
    role: "Logistics Solutions Consultant",
    department: "Client Success",
    initials: "JH",
    image: member4,
    bio: "Master of Business Administration UWE, Bristol, B.Sc. (Hons) in Transport & Logistics Management University of Moratuw ",
    color: "#048a7c",
  },
]

export default function OurTeam() {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const isDesktop = windowWidth >= 1024
  const showCarousel = !isDesktop || teamMembers.length > 4

  return (
    <section id="our-team" className="py-10 sm:py-16 md:py-24 bg-background">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-14 text-left">
          
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#059587] font-medium mb-1.5 sm:mb-2">
            Meet The Team
          </p>
          <h2 className="text-2xl flex  sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            People behind
            <span className=" ml-2 text-[#059587]">our excellence</span>
          </h2>
        </div>

        {showCarousel ? (
          <Carousel opts={{ align: 'start', loop: false }} className="w-full">
            <div className="flex items-center justify-end mb-4 gap-2">
              <CarouselPrevious className="static translate-y-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 border-[#059587]/40 text-[#059587] hover:bg-[#059587] hover:text-white hover:border-[#059587] transition-all duration-200" />
              <CarouselNext className="static translate-y-0 rounded-full w-8 h-8 sm:w-10 sm:h-10 border-[#059587]/40 text-[#059587] hover:bg-[#059587] hover:text-white hover:border-[#059587] transition-all duration-200" />
            </div>
            <CarouselContent className="-ml-4 sm:-ml-6">
              {teamMembers.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <TeamCard member={member} windowWidth={windowWidth} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} windowWidth={windowWidth} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

function TeamCard({
  member,
  windowWidth,
}: {
  member: (typeof teamMembers)[0]
  windowWidth: number
}) {
  const isMobile = windowWidth < 640

  // On mobile: let image height auto-fit the full image (no crop)
  // On tablet+: fixed height so all cards are uniform
  const imageClass = isMobile
    ? 'w-full'
    : windowWidth < 768
    ? 'w-full h-[190px]'
    : windowWidth < 1024
    ? 'w-full h-[210px]'
    : windowWidth < 1280
    ? 'w-full h-[220px]'
    : 'w-full h-[240px]'

  // Mobile: contain so full person shows; tablet+: cover with top-anchor
  const imgFit = isMobile
    ? 'w-full h-auto object-contain object-top'
    : 'w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'

  return (
    <div className="group flex flex-col hover:-translate-y-1 transition-all duration-300 h-full">

      {/* Image box */}
      <div className={`relative overflow-hidden rounded-xl ${imageClass}`}>
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className={imgFit}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-light"
            style={{ backgroundColor: member.color }}
          >
            {member.initials}
          </div>
        )}

        {/* Subtle bottom fade — only on fixed-height cards */}
        {!isMobile && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/50 to-transparent" />
        )}
      </div>

      {/* Accent line */}
      <div
        className="h-[2px] w-8 sm:w-10 mt-2.5 rounded-full shrink-0"
        style={{ backgroundColor: member.color }}
      />

      {/* Text */}
      <div className="pt-2 pb-3 flex flex-col gap-0.5 sm:gap-1">
        <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight tracking-tight">
          {member.name}
        </h3>
        <p className="text-[11px] sm:text-sm font-medium leading-snug" style={{ color: member.color }}>
          {member.role}
        </p>
        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mt-0.5">
          {member.bio}
        </p>
      </div>

    </div>
  )
}