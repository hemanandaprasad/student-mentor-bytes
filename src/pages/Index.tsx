/**
 * Index Page - Main Portfolio Page
 * This is the single page portfolio website
 * All sections are combined here for smooth scrolling
 * 
 * Author: A Hemananda Prasad
 * Project: Personal Portfolio Website
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero / Home Section */}
        <HeroSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
