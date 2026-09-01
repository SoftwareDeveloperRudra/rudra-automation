import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Automation", href: "#automation" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070A11]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-white font-heading"
        >
          <span>RUDRA</span>
          <span className="text-[#00E676] group-hover:rotate-12 transition-transform duration-300">
            .
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#00E676] px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hi Rudra, I'd like to get a free automation audit for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#00E676] hover:text-white px-3.5 py-2 flex items-center gap-1.5 bg-[#00E676]/10 border border-[#00E676]/30 rounded-full transition-all duration-200 hover:border-[#00E676]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
            <span>Free Audit</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-black text-sm font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-[#00E676]/25 transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#00E676] p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0D131F]/98 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-300 hover:text-[#00E676] py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Free Automation Audit</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-extrabold text-black bg-[#00E676] py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
