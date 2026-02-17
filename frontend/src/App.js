import React from "react";
import "@/App.css";
import { Navbar } from "./components/landing/Navbar";
import { HeroHeader } from "./components/landing/HeroHeader";
import { DeliveryFlow } from "./components/landing/DeliveryFlow";
import { EnhancementLifecycle } from "./components/landing/EnhancementLifecycle";
import { ArchitectureLayers } from "./components/landing/ArchitectureLayers";
import { ReleasePipeline } from "./components/landing/ReleasePipeline";
import { GovernanceModel } from "./components/landing/GovernanceModel";
import { ClosingStatement } from "./components/landing/ClosingStatement";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroHeader />
        <DeliveryFlow />
        <EnhancementLifecycle />
        <ArchitectureLayers />
        <ReleasePipeline />
        <GovernanceModel />
        <ClosingStatement />
      </main>
      <Footer />
    </div>
  );
}

export default App;
