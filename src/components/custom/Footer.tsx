import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Mail,
  Phone,
  MapPin,
  
  ArrowRight,
  Facebook,
  MailCheck,
  PhoneCall,
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
      <div className="h-px w-7xl bg-gradient-to-r from-transparent via-[#059578] to-transparent" />

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
                { icon: Facebook, label: 'facebook', href: 'https://www.facebook.com/share/1HbFa3k3PW/' },
                { icon: MailCheck, label: 'mail', href: 'mailto:synergyfmservices@gmail.com' },
                { icon: PhoneCall, label: 'phone', href: 'tel:+94762146244' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#059578] hover:border-[#059578]/50 transition-all duration-200"
                >
                  <Icon size={15} />
                 
                </a>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="space-y-5">
            <h3
              className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-[#059578]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              About
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[
                { label: 'Our Story', href: '#about' },
                { label: 'Mission & Values', href: '#' },
                { label: 'Our Team', href: '#our-team' },
                { label: 'Careers', href: '#careers' },
                { label: 'Press & Media', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200">
                      <ArrowRight size={11} className="text-[#059578]" />
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
              className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-[#059578]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <li className="flex items-start text-left gap-3">
                <Mail size={15} className="text-[#059578] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Email</p>
                  <a
                    href="mailto:synergyfmservices@gmail.com"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                  synergyfmservices@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start text-left gap-3">
                <Phone size={15} className="text-[#059578] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Phone</p>
                  <a
                    href="tel:+94762146244"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    +94 76 214 6244
                  </a>
                </div>
              </li>
              <li className="flex items-start text-left gap-3">
                <MapPin size={15} className="text-[#059578] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-500 mb-0.5">Office</p>
                  <p className="text-sm text-zinc-300 font-thin leading-snug">
                   No 391/1, Dalugamgoda,<br />
                   Old Kandy road, Kelaniya,<br />
                    Sri Lanka 
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-5">
  <h3
    className="text-xs text-left font-semibold tracking-[0.15em] uppercase text-[#059578]"
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

  {/* ── Newsletter Form with Web3Forms ── */}
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    className="flex flex-col gap-2.5"
    onSubmit={(e) => {
      // Optional: tiny client-side feedback (no full state management needed)
      const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
      if (!email) return;

      // You can add simple success alert or toast here if you want
      // setTimeout(() => alert("Thank you! You've been subscribed."), 800);
    }}
  >
    {/* ── Required: Your Access Key ── */}
    <input
      type="hidden"
      name="access_key"
      value="ecd76787-8f56-47a0-a129-2becbe3e7c7e" // ← Replace with your real key
    />

    {/* Customizes the email you receive */}
    <input
      type="hidden"
      name="subject"
      value="New Newsletter Subscription"
    />
    <input
      type="hidden"
      name="from_name"
      value="Synergy Website"
    />

    {/* Makes reply button in your email go directly to subscriber */}
    <input
      type="hidden"
      name="replyto"
      value="email" // ← uses the submitted email field
    />

    {/* Honeypot – very effective basic spam protection (invisible to humans) */}
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      className="hidden"
      style={{ display: "none" }}
      aria-hidden="true"
    />

    {/* The only visible field */}
    <Input
      type="email"
      name="email"          // ← important: name="email"
      placeholder="your@email.com"
      required
      className="bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-[#059578] focus-visible:border-[#059578]/50 h-10 text-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    />

    <Button
      type="submit"
      className="w-full bg-[#059578] hover:bg-[#0d6858] text-zinc-950 font-semibold text-sm h-10 transition-colors duration-200"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      Subscribe
      <ArrowRight size={14} className="ml-2" />
    </Button>
  </form>

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