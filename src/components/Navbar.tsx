import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { name: "Home", href: "#" },
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
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic Active Navigation tracking
      const sections = ["work", "services", "automation", "about", "pricing", "contact"];
      let currentActive = "Home";

      if (window.scrollY < 300) {
        currentActive = "Home";
      } else {
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              currentActive = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
              break;
            }
          }
        }
      }

      setActiveNav(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    if (name === "Home" || href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveNav("Home");
    } else {
      setActiveNav(name);
    }
  };

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
          onClick={(e) => handleNavClick(e, "Home", "#")}
          className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-white font-heading"
        >
          <span>RUDRA</span>
          <span className="text-[#00FFA3] group-hover:rotate-12 transition-transform duration-300">
            .
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.name, link.href)}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#00FFA3] bg-[#00FFA3]/10 border border-[#00FFA3]/30 shadow-sm"
                    : "text-gray-300 hover:text-[#00FFA3] hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Hi Rudra, I'd like to get a free automation audit for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#00FFA3] hover:text-white px-3.5 py-2 flex items-center gap-1.5 bg-[#00FFA3]/10 border border-[#00FFA3]/30 rounded-full transition-all duration-200 hover:border-[#00FFA3]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00FFA3]" />
            <span>Free Audit</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-[#00FFA3] hover:bg-[#00E676] text-black text-sm font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-[#00FFA3]/25 transition-all duration-200"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-[#00FFA3] p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
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
                {navLinks.map((link) => {
                  const isActive = activeNav === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.name, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-base font-semibold py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                        isActive ? "text-[#00FFA3]" : "text-gray-300 hover:text-[#00FFA3]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#00FFA3]" />}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-semibold text-[#00FFA3] bg-[#00FFA3]/10 border border-[#00FFA3]/30 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Free Automation Audit</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-sm font-extrabold text-black bg-[#00FFA3] py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
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
