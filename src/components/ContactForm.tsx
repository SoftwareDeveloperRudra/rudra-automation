import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone, MapPin, AlertCircle } from "lucide-react";
import { submitAutomationLead } from "@/lib/n8n";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceRequired: "AI Automation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please provide your name, email, and message.");
      setLoading(false);
      return;
    }

    try {
      const res = await submitAutomationLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        serviceRequired: formData.serviceRequired,
        problem: formData.message,
        source: "contact-section-form",
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Error submitting form. Please verify your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#04060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF0055]/10 border border-[#FF0055]/30 text-[#FF0055] text-xs font-mono font-bold uppercase tracking-widest mb-3">
                <Send className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                Start A Project
              </h2>
              <p className="text-gray-300 text-base mt-3">
                Have a web application to build or a business workflow to automate? Fill out the form or reach out directly on WhatsApp.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#090D16] border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF0055]/10 border border-[#FF0055]/30 flex items-center justify-center text-[#FF0055]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-gray-400">LOCATION</div>
                  <div className="text-sm font-semibold text-white">Surat, Gujarat, India</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#090D16] border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 border border-[#00FF66]/30 flex items-center justify-center text-[#00FF66]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-gray-400">WHATSAPP DIRECT</div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#00FF66] hover:underline"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#090D16] border border-white/10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you {formData.name}. Rudra has received your project details and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        businessName: "",
                        serviceRequired: "AI Automation",
                        message: "",
                      });
                    }}
                    className="text-xs text-[#00FF66] underline hover:text-white pt-2 font-bold"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Project Requirements Form
                  </h3>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-[#FF0055]/10 border border-[#FF0055]/30 text-[#FF0055] text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company / Institute Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-[#0E1422] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                    >
                      <option value="Website">Business Website</option>
                      <option value="AI Automation">AI Automation Workflow</option>
                      <option value="Booking System">Automated Booking System</option>
                      <option value="AI Agent">AI Agent / Custom Bot</option>
                      <option value="Custom Software">Custom Software App</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project goals, existing tools, and desired launch timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF0055] to-[#D90368] hover:from-[#FF2A6D] hover:to-[#FF0055] text-white font-black text-sm shadow-xl shadow-[#FF0055]/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
