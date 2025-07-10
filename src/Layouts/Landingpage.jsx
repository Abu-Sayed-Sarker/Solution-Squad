import React from "react";
import Hero from "../Components/Hero-Section/Hero";
import Navbar from "../Components/Navbar/Navbar";
import AIPartnerComponent from "../Components/AI-Partner/AIPartnerComponent";
import ServicesSection from "../Components/Service-Card/ServiceCard";
import ProjectsShowcase from "../Components/Projects-Showcase/ProjectsShowcase";
import Footer from "../Components/Footer/Footer";
import TeamCarousel from "../Components/Our-team-Section/TeamCarousel";
import OurClient from "../Components/Our-Client/OurClient";
import TestimonialSection from "../Components/client-review/TestimonialCard";

export default function Landingpage() {
  return (
    <div className="">
      <div className="bg-gradient-to-b top-0 from-[#8ff8a0b0] to-transparent">
        <div className="fixed top-0 z-50 w-full backdrop-blur">
          <Navbar />
        </div>
        <Hero />
      </div>
      <div>
        <AIPartnerComponent />
        <ServicesSection />
        <ProjectsShowcase />
        <TeamCarousel />
        <TestimonialSection />
        <OurClient />
        <Footer />
      </div>
    </div>
  );
}
