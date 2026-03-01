import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
} from 'lucide-react'
import logo from "@/assets/logo2.png";

// Reusable React Logo component
const Logo = ({ className }: { className?: string }) => (
  <img
    src={logo as string}
    alt="Synergy Logo"
    className={`w-auto object-contain ${className ?? ''}`}
  />
);

function Footer() {
  return (
    <footer
      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
      className="relative bg-zinc-950 text-zinc-100 overflow-hidden "
    >
      {/* Decorative top border */}
      <div className="h-px w-7xl bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 40%)`,
        }}
      />

      <div className="relative w-full lg:max-w-7xl lg:mx-auto px-6 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              {/* Logo image instead of text */}
              <a href="/">
                <Logo className="h-42" />
              </a>
              <p
                className="mt-3 text-sm text-left leading-relaxed text-zinc-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Building exceptional digital experiences for forward-thinking companies since 2020.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="space-y-5">
            <h3
              className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[
                { label: 'Our Story', href: '#' },
                { label: 'Mission & Values', href: '#' },
                { label: 'The Team', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press & Media', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200">
                      <ArrowRight size={11} className="text-amber-400" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-5">
            <h3
              className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <li className="flex items-start text-left gap-3">
                <Mail size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <a
                    href="mailto:hello@synergy.com"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    hello@synergy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start text-left gap-3">
                <Phone size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start text-left gap-3">
                <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Office</p>
                  <p className="text-sm text-zinc-300 font-thin leading-snug">
                    350 Fifth Ave, Suite 100<br />
                    New York, NY 10118
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-5">
            <h3
              className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-amber-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Stay Updated
            </h3>
            <p
              className="text-sm text-left text-zinc-400 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get the latest news and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col gap-2.5">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-amber-400 focus-visible:border-amber-400/50 h-10 text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              <Button
                className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm h-10 transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Subscribe
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </div>
            <p
              className="text-xs text-zinc-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Separator className="bg-zinc-800/60 mb-8" />

        {/* Bottom Row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <p>© {new Date().getFullYear()} Synergy Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-zinc-300 transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer