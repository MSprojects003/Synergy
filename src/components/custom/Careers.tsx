"use client";

import CareerCard from "./CareerCard";
import { jobs } from "@/data/jobs";
import { getDateStatus } from "./JobDetails";
import { Briefcase } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


// ? Careers takes NO props — it reads jobs directly from @/data/jobs
export default function Careers() {
  // Filter jobs that are not expired (closing date hasn't passed)
  const availableJobs = jobs.filter((job) => {
    const status = getDateStatus(job.closingDate);
    return status !== "closed";
  });

  const hasAvailableJobs = availableJobs.length > 0;

  return (
    <section id="careers" className="w-full py-12 md:py-16 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {hasAvailableJobs ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="mb-0 sm:mb-10 md:mb-0 text-left">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#059587] font-medium mb-1.5 sm:mb-2">
                  JOIN OUR TEAM
                </p>
                <h2 className="text-2xl flex sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                  Explore
                  <span className="ml-2 text-[#059587]">Careers</span>
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
        ) : (
          <div className="w-full">
            {/* Section heading */}
            <div className="text-left mb-8">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#059587] font-medium mb-1.5 sm:mb-2">
                JOIN OUR TEAM
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground">
                Explore <span className="text-[#059587]">Careers</span>
              </h2>
            </div>

            {/* Centered empty-state card */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg flex flex-col items-center text-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#059587]/10">
                  <Briefcase className="w-7 h-7 text-[#059587]" />
                </div>
                <div>
                  <p className="text-base md:text-lg text-gray-700 font-medium mb-2">
                    No Positions Available
                  </p>
                  <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                    Currently, we don't have any open positions. We appreciate
                    your interest and encourage you to check back soon for
                    exciting opportunities to join our growing team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}