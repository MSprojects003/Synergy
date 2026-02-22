"use client"; // Safe to keep/remove in Vite

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#careers", label: "Careers" },
  { href: "#about", label: "About Us" },
];

export default function NavigationBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center space-x-2 font-bold text-xl md:text-2xl">
          SFMS
          {/* <img src="/logo.svg" alt="SFMS" className="h-8 w-auto" /> */}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons (desktop) + Mobile Trigger */}
        <div className="flex items-center gap-4">
          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85%] max-w-[320px] sm:max-w-[360px] p-0">
              <div className="flex flex-col h-full">
                {/* Header / Brand in mobile menu */}
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold">SFMS</h2>
                </div>

                {/* Navigation links - takes available space */}
                <nav className="flex-1 px-6 py-10 flex flex-col gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-xl sm:text-2xl font-medium transition-colors hover:text-primary text-foreground/90 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Social icons at the bottom */}
                <div className="px-6 py-8 border-t bg-muted/30">
                  <div className="flex justify-center gap-10">
                    <a
                      href="https://instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Instagram className="h-7 w-7" />
                    </a>
                    <a
                      href="https://linkedin.com/company/yourcompany"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-7 w-7" />
                    </a>
                    <a
                      href="https://x.com/yourhandle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-7 w-7" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}