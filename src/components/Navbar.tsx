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
          ? "bg-[#04060A]/90 backdrop-blur-xl border-b border-[#FF0055]/30 py-3 shadow-2xl shadow-[#FF0055]/10"
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
          <span className="text-[#00FF66] group-hover:rotate-12 transition-transform duration-300 shadow-[#00FF66]">
            .
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#00FF66] px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
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
            className="text-xs font-semibold text-[#00FF66] hover:text-white px-3.5 py-2 flex items-center gap-1.5 bg-[#00FF66]/10 border border-[#00FF66]/30 rounded-full transition-all duration-200 hover:border-[#00FF66]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00FF66]" />
            <span>Free Audit</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#FF0055] to-[#D90368] hover:from-[#FF2A6D] hover:to-[#FF0055] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#00FF66] p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
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
            className="md:hidden bg-[#090D16]/98 border-b border-[#FF0055]/30 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-300 hover:text-[#00FF66] py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold text-[#00FF66] bg-[#00FF66]/10 border border-[#00FF66]/30 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Free Automation Audit</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-bold text-white bg-gradient-to-r from-[#FF0055] to-[#D90368] py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
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
