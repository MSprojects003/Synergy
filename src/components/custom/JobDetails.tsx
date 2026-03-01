"use client";

import {
  ArrowUpRight,
  Calendar,
  MapPin,
  Briefcase,
  AlertTriangle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/data/jobs";
import { CAREERS_EMAIL } from "@/data/jobs";

// ── Date helpers — exported so CareerCard can import them ─────────────────────

function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function getTodayMidnight(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export type DateStatus = "active" | "closing-today" | "closed";

export function getDateStatus(closingDate: string): DateStatus {
  const today = getTodayMidnight();
  const closing = parseLocalDate(closingDate);
  if (closing < today) return "closed";
  if (closing.getTime() === today.getTime()) return "closing-today";
  return "active";
}

export function formatDisplayDate(iso: string): string {
  return parseLocalDate(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface JobDetailsProps {
  job: Job;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function JobDetails({ job, open, onOpenChange }: JobDetailsProps) {
  const status = getDateStatus(job.closingDate);
  const isClosingToday = status === "closing-today";
  const displayDate = formatDisplayDate(job.closingDate);

  // Opens Gmail compose window directly in a new tab
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CAREERS_EMAIL
  )}&su=${encodeURIComponent(
    `Application for ${job.title}`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI'm applying for the ${job.title} position.\n\nPlease find my details below:\n\n`
  )}`;

  const openGmail = () => {
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-lg w-[calc(100%-2rem)] sm:w-full
          p-0 overflow-hidden rounded-2xl
          max-h-[85vh] flex flex-col
        "
      >
        {/* Fixed hero — does NOT scroll */}
        <div className="relative h-40 sm:h-48 w-full flex-shrink-0">
          <img
            src={job.imageUrl}
            alt={job.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-5">
            <span className="text-white/75 text-xs font-medium mb-0.5 block">
              {job.department}
            </span>
            <h2 className="text-white text-lg sm:text-xl font-bold leading-tight">
              {job.title}
            </h2>
          </div>
        </div>

        {/* Closing today alert — fixed, does NOT scroll */}
        {isClosingToday && (
          <div className="flex items-center gap-2 bg-amber-50 border-b border-amber-200 text-amber-700 text-xs font-semibold px-5 py-2.5 flex-shrink-0">
            <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
            This position closes today. Apply now to avoid missing out!
          </div>
        )}

        {/* Scrollable body */}
        <div
          className="
            flex-1 overflow-y-auto p-4 sm:p-6 space-y-4
            [&::-webkit-scrollbar]:w-[4px]
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-gray-200
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb:hover]:bg-gray-300
          "
        >
          {/* Meta badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-medium">
              <MapPin className="h-3 w-3" /> {job.location}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs font-medium">
              <Briefcase className="h-3 w-3" /> {job.type}
            </Badge>
            <Badge
              variant="secondary"
              className={`gap-1.5 px-2.5 py-1 text-xs font-medium ${
                isClosingToday ? "bg-amber-100 text-amber-700 hover:bg-amber-100" : ""
              }`}
            >
              <Calendar className="h-3 w-3" />
              {isClosingToday ? "Closes today!" : `Closes ${displayDate}`}
            </Badge>
          </div>

          <div className="border-t border-gray-100" />

          {/* About */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-widest">
              About this role
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-widest">
              What you'll do
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-widest">
              Requirements
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-1 pb-2 space-y-3">
            <Button
              onClick={openGmail}
              className={`w-full h-10 rounded-xl text-white font-medium text-sm gap-2 ${
                isClosingToday
                  ? "bg-amber-500 hover:bg-amber-600"
                  : "bg-gray-900 hover:bg-gray-700"
              }`}
            >
              Apply for this position
              <ArrowUpRight className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <p className="text-center text-xs text-gray-500">
              Email us directly at{" "}
              <button
                onClick={openGmail}
                className={`font-semibold underline underline-offset-2 transition-colors cursor-pointer ${
                  isClosingToday
                    ? "text-amber-600 hover:text-amber-700"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              >
                {CAREERS_EMAIL}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}