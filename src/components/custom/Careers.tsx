"use client";

import CareerCard from "./CareerCard";
import { jobs } from "@/data/jobs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
 

// ✅ Careers takes NO props — it reads jobs directly from @/data/jobs
export default function Careers() {
  return (
    <section id="careers" className="w-full py-12 md:py-16 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex items-center justify-between mb-6">
        <div className="mb-0 sm:mb-10 md:mb-0 text-left">
          
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#059587] font-medium mb-1.5 sm:mb-2">
            JOIN OUR TEAM
          </p>
          <h2 className="text-2xl flex  sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
            Explore
            <span className=" ml-2 text-[#059587]">Careers</span>
          </h2>
        </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 bg-white border shadow-sm hover:bg-gray-50 text-[#059587] h-10 w-10" />
              <CarouselNext className="static translate-y-0 bg-white border shadow-sm hover:bg-gray-50 text-[#059587] h-10 w-10" />
            </div>
          </div>

          <CarouselContent className="-ml-2 md:-ml-4">
            {jobs.map((job) => (
              <CarouselItem
                key={job.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* CareerCard auto-hides expired jobs by returning null */}
                <CareerCard job={job} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}