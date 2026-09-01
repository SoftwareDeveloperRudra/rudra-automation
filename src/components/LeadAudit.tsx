import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { submitAutomationLead } from "@/lib/n8n";

export default function LeadAudit() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Coaching Institute",
    phone: "",
    email: "",
    problem: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!formData.name || !formData.email || !formData.problem) {
      setErrorMsg("Please fill out your name, email, and current manual process.");
      setLoading(false);
      return;
    }

    try {
      const res = await submitAutomationLead({
        name: formData.name,
        businessName: formData.businessName,
        businessType: formData.businessType,
        phone: formData.phone,
        email: formData.email,
        problem: formData.problem,
        source: "automation-audit-section",
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Submission error. Please verify your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 relative overflow-hidden bg-[#04060A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090D16]/90 border border-[#00FF66]/30 shadow-2xl backdrop-blur-2xl relative">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00FF66]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Heading */}
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary Business Analysis</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
              Not Sure What To Automate?
            </h2>

            <p className="text-gray-300 text-base max-w-xl mx-auto">
              I'll analyze your current workflow and identify <strong>2–3 repetitive processes</strong> in your business that could potentially be automated for maximum time savings.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00FF66]/20 border border-[#00FF66]/40 text-[#00FF66] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Request Received!
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thanks {formData.name}. Rudra will review your business workflow and get back to you within 24 hours with an actionable automation plan.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      businessName: "",
                      businessType: "Coaching Institute",
                      phone: "",
                      email: "",
                      problem: "",
                    });
                  }}
                  className="text-xs text-[#00FF66] underline hover:text-white pt-2 font-bold"
                >
                  Submit another audit request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-[#FF0055]/10 border border-[#FF0055]/30 text-[#FF0055] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF66] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Coaching Academy"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF66] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Business Category
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-[#0E1422] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                    >
                      <option value="Coaching Institute">Coaching Institute</option>
                      <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                      <option value="Salon / Spa">Salon / Spa</option>
                      <option value="Gym / Fitness">Gym / Fitness</option>
                      <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                      <option value="Real Estate Agency">Real Estate Agency</option>
                      <option value="Hotel / Hospitality">Hotel / Hospitality</option>
                      <option value="Local Services">Local Service Business</option>
                      <option value="Other">Other SMB</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF66] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF66] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Current Manual Process / Problem *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. I currently receive customer inquiries on WhatsApp and manually follow up, leading to forgotten leads and lost sales."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF66] transition-colors resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-[#00FF66] shrink-0" />
                    <span>No spam. 100% confidential business review.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-[#00FF66] hover:bg-[#39FF14] text-black font-black text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-[#00FF66]/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Automation Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
