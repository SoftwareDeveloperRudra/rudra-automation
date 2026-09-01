import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "I work primarily with local service businesses and SMBs including Coaching Institutes, Clinics, Salons, Gyms, Restaurants, Cafes, Real Estate Agencies, Hotels, and service providers in Surat, Gujarat, across India, and globally.",
  },
  {
    q: "What can you automate?",
    a: "I automate repetitive operational tasks: lead capture and qualification, WhatsApp and email follow-ups, appointment booking and calendar sync, customer inquiry replies, CRM updates, and internal notifications.",
  },
  {
    q: "Can you integrate WhatsApp?",
    a: "Yes. I integrate official WhatsApp Business APIs and automation webhooks to dispatch instant lead follow-ups, appointment confirmations, and owner alerts directly on WhatsApp.",
  },
  {
    q: "Can you connect Google Calendar?",
    a: "Absoluty. I set up automated two-way Google Calendar synchronization so when a client books an appointment on your site, it checks real-time slot availability, reserves the time, and sends calendar invites.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. I handle 100% of the engineering, API setups, web hosting, and workflow configuration. You get a simple, finished system that runs quietly in the background.",
  },
  {
    q: "How long does an automation take?",
    a: "Most standard websites and n8n lead automations take between 3 to 7 business days to design, test, and deploy to live production.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. I offer post-launch maintenance, performance monitoring, workflow tuning, and support to ensure your system continues running reliably as your business grows.",
  },
  {
    q: "Can you build a custom system?",
    a: "Yes. If your business has unique operational needs, custom API requirements, or multi-agent AI requirements, I engineer tailored solutions built specifically for your tech stack.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#04060A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-300 text-base">
            Everything you need to know about working together, build timelines, and automation capabilities.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#090D16] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00FF66] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
