import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CheckCircle, Sparkles, Loader2, Bot, Database, MessageSquare, Smartphone, ArrowRight } from "lucide-react";
import { runAutomationDemo } from "@/lib/n8n";

const demoSteps = [
  { icon: MessageSquare, title: "Inquiry Received", desc: "Form data captured securely." },
  { icon: Bot, title: "AI Analyzing Intent", desc: "Gemini AI categorizes lead urgency & requirements." },
  { icon: Sparkles, title: "Lead Qualified", desc: "Lead score & budget tier determined." },
  { icon: Database, title: "Lead Saved to CRM", desc: "Stored instantly in Google Sheets / Database." },
  { icon: MessageSquare, title: "Follow-up Created", desc: "Personalized WhatsApp / Email message staged." },
  { icon: Smartphone, title: "Owner Notified", desc: "Instant push notification dispatched to your phone." },
];

export default function AutomationDemo() {
  const [formData, setFormData] = useState({
    name: "Rohan Patel",
    businessType: "Coaching Institute",
    requirement: "I receive 20+ WhatsApp inquiries daily but lose leads because I forget to manually follow up.",
    email: "rohan@example.com",
    phone: "+91 98765 43210",
  });

  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleRunDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRunning) return;

    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStep(0);

    runAutomationDemo({
      name: formData.name,
      businessType: formData.businessType,
      problem: formData.requirement,
      email: formData.email,
      phone: formData.phone,
    }).catch(console.error);

    for (let i = 0; i < demoSteps.length; i++) {
      setCurrentStep(i);
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setIsRunning(false);
    setIsCompleted(true);
  };

  return (
    <section id="demo" className="py-24 relative bg-[#04060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono font-bold uppercase tracking-widest">
            <Play className="w-3.5 h-3.5 fill-[#00FF66]" />
            <span>Interactive Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            See Automation In Action
          </h2>

          <p className="text-gray-300 text-base">
            Test how an incoming customer lead is automatically qualified, logged, and staged for follow-up in under 5 seconds.
          </p>
        </div>

        {/* Demo Interface Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Input Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#090D16] border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold font-heading text-white mb-2 flex items-center gap-2">
              <span>Simulate An Inquiry</span>
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Adjust sample input values or click "Run Automation" directly to test.
            </p>

            <form onSubmit={handleRunDemo} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Visitor Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-[#0E1422] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors"
                >
                  <option value="Coaching Institute">Coaching Institute</option>
                  <option value="Clinic / Healthcare">Clinic / Healthcare</option>
                  <option value="Salon / Spa">Salon / Spa</option>
                  <option value="Gym / Fitness">Gym / Fitness</option>
                  <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                  <option value="Real Estate Agency">Real Estate Agency</option>
                  <option value="Local Service Business">Local Service Business</option>
                  <option value="Other">Other Business</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">
                  Requirement / Pain Point
                </label>
                <textarea
                  rows={3}
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#00FF66] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isRunning}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF0055] to-[#D90368] hover:from-[#FF2A6D] hover:to-[#FF0055] text-white font-black text-sm shadow-lg shadow-[#FF0055]/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Executing Workflow...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run Automation</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Workflow Console */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#090D16]/90 border border-white/15 backdrop-blur-xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-[#FF0055] animate-ping" : isCompleted ? "bg-[#00FF66]" : "bg-gray-500"}`} />
                Workflow Console Output
              </span>
              <span className="text-xs text-[#00FF66] font-mono font-bold">
                {isRunning ? "PROCESSING..." : isCompleted ? "SUCCESS" : "READY"}
              </span>
            </div>

            {/* Execution Steps Stack */}
            <div className="space-y-3">
              {demoSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = currentStep === idx;
                const isDone = currentStep > idx || isCompleted;

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                      opacity: isActive || isDone ? 1 : 0.4,
                    }}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-[#FF0055]/10 border-[#FF0055] text-white shadow-lg shadow-[#FF0055]/20"
                        : isDone
                        ? "bg-[#00FF66]/5 border-[#00FF66]/30 text-gray-200"
                        : "bg-white/[0.02] border-white/5 text-gray-500"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isActive
                            ? "bg-[#FF0055] text-white font-bold"
                            : isDone
                            ? "bg-[#00FF66]/20 text-[#00FF66]"
                            : "bg-white/5 text-gray-500"
                        }`}
                      >
                        {isDone && !isActive ? (
                          <CheckCircle className="w-4 h-4 text-[#00FF66]" />
                        ) : isActive ? (
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {step.title}
                        </div>
                        <div className="text-xs text-gray-400">{step.desc}</div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-gray-400 font-bold">
                      STEP 0{idx + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Completion Banner */}
            <AnimatePresence>
              {isCompleted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#00FF66]/20 to-[#39FF14]/20 border border-[#00FF66]/40 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#00FF66]" />
                      <span>Automation Complete!</span>
                    </h4>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      Want this exact lead processing pipeline for your business?
                    </p>
                  </div>
                  <a
                    href="#audit"
                    className="shrink-0 bg-[#00FF66] hover:bg-[#39FF14] text-black font-black text-xs px-4 py-2.5 rounded-xl shadow-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Get Free Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
