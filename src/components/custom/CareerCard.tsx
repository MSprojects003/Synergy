"use client";

import  { useState } from "react";
import { ArrowUpRight, Calendar, MapPin, Clock } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import type { Job } from "@/data/jobs";
import JobDetails, { getDateStatus, formatDisplayDate } from "./JobDetails";

// ── Props ─────────────────────────────────────────────────────────────────────

interface CareerCardProps {
  job: Job;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CareerCard({ job }: CareerCardProps) {
  const [open, setOpen] = useState(false);

  const status = getDateStatus(job.closingDate);

  // Hide expired jobs — render nothing
  if (status === "closed") return null;

  const isClosingToday = status === "closing-today";
  const displayDate = formatDisplayDate(job.closingDate);

  return (
    <>
      {/* ── Card ─────────────────────────────────────────────────────────── */}
      <div
        className={`
          group relative flex flex-col bg-white rounded-2xl overflow-hidden
          border shadow-sm hover:shadow-xl hover:-translate-y-1
          transition-all duration-300 h-full
          ${isClosingToday ? "border-amber-400 ring-1 ring-amber-400/60" : "border-gray-100"}
        `}
      >
        {/* Closing today banner */}
        {isClosingToday && (
          <div className="flex items-center gap-2 bg-amber-400 text-amber-900 text-xs font-semibold px-4 py-1.5">
            <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
            Closing Today — Don't miss out!
          </div>
        )}

        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={job.imageUrl}
            alt={job.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            {job.department}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {job.type}
            </span>
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <span
              className={`flex items-center gap-1.5 text-xs font-medium ${
                isClosingToday ? "text-amber-600" : "text-gray-400"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              {isClosingToday ? "Closes today!" : `Closes ${displayDate}`}
            </span>

            {/* Arrow button — opens JobDetails dialog */}
            <button
              onClick={() => setOpen(true)}
              className={`
                flex items-center justify-center h-9 w-9 rounded-full text-white
                hover:scale-110 transition-all duration-200 shadow-sm
                ${isClosingToday ? "bg-amber-500 hover:bg-amber-600" : "bg-gray-900 hover:bg-gray-700"}
              `}
              aria-label="View job details"
            >
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── JobDetails dialog — all dialog UI lives in JobDetails.tsx ─────── */}
      <JobDetails job={job} open={open} onOpenChange={setOpen} />
    </>
  );
}