import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProcessSection from './components/ProcessSection';
import InteractiveTechSection from './components/InteractiveTechSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import ResultsSection from './components/ResultsSection';
import StartWith500Section from './components/StartWith500Section';
import FounderSection from './components/FounderSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const openProjectModal = () => setProjectModalOpen(true);
  const closeProjectModal = () => setProjectModalOpen(false);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        onOpenProjectModal={openProjectModal} 
      />

      {/* Main Page Content */}
      <main id="main" className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* 01. The Problem */}
        <ProblemSection />

        {/* 02. What Pravah Does (6 Capabilities) */}
        <CapabilitiesSection />

        {/* 03. How We Work (4 Stages) */}
        <ProcessSection />

        {/* 04. Interactive Technology */}
        <InteractiveTechSection />

        {/* 05. Selected Work (3 Real-World Concept Systems) */}
        <SelectedWorkSection />

        {/* 06. Results & Measurement */}
        <ResultsSection />

        {/* 07. Start with 500 */}
        <StartWith500Section />

        {/* 08. Meet the Founder (Manan Soparia) */}
        <FounderSection />

        {/* 09. Final CTA */}
        <FinalCtaSection 
          onOpenProjectModal={openProjectModal} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenProjectModal={openProjectModal} 
      />

      {/* Interactive Project Intake & WhatsApp Modal */}
      <ProjectModal 
        isOpen={projectModalOpen} 
        onClose={closeProjectModal} 
      />
    </div>
  );
}
