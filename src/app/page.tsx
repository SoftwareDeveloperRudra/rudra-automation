import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PersonalBrand from "@/components/PersonalBrand";
import TrustPositioning from "@/components/TrustPositioning";
import Services from "@/components/Services";
import AutomationServices from "@/components/AutomationServices";
import AutomationDemo from "@/components/AutomationDemo";
import LeadAudit from "@/components/LeadAudit";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-gray-100 relative">
      <Navbar />
      <Hero />
      <PersonalBrand />
      <TrustPositioning />
      <Services />
      <AutomationServices />
      <AutomationDemo />
      <LeadAudit />
      <Projects />
      <About />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
