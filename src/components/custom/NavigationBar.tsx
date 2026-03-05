"use client"; // Safe to keep/remove in Vite

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu,  Facebook, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <a href="/" className="flex items-center">
          <img src={logo} alt="SFMS" className="h-14 w-auto" />
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
              href="https://wa.me/+94762146244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="mailto:synergyfmservices@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1HbFa3k3PW/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="h-5 w-5" />
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
                {/* Header / Logo in mobile menu */}
                <div className="p-6 border-b">
                  <a href="/" onClick={() => setOpen(false)}>
                    <img src={logo} alt="SFMS" className="h-7 w-auto" />
                  </a>
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
              href="https://wa.me/+94762146244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="mailto:synergyfmservices@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mail"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1HbFa3k3PW/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="h-5 w-5" />
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