import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HopeSection from "@/components/HopeSection";
import Therapist from "@/components/Therapist";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Specialties />
      <HopeSection />
      <Therapist />
      <OurOffice />
      <FAQ />
      <CTA />
    </div>
  );
}