
import React from "react";
import Index from "./Index";
import AboutForro from "./AboutForro";
import AboutUs from "./AboutUs";
import Events from "./Events";
import CustomEvents from "./CustomEvents";
import Rules from "./Rules";
import Partners from "./Partners";
import Contact from "./Contact";
import { useLanguage } from "../contexts/LanguageContext";

const HomePage = () => {
  const { t, isLoading } = useLanguage();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-48 bg-dance-cream rounded mb-4"></div>
          <div className="h-4 w-32 bg-dance-cream rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col w-full">
      {/* Home Section */}
      <section id="home" className="scroll-mt-20 w-full">
        <Index />
      </section>
      
      {/* About Forró Section */}
      <section id="about-forro" className="scroll-mt-20 w-full">
        <AboutForro />
      </section>
      
      {/* About Us Section */}
      <section id="about-us" className="scroll-mt-20 w-full">
        <AboutUs />
      </section>
      
      {/* Events Section */}
      <section id="events" className="scroll-mt-20 w-full">
        <Events />
      </section>
      
      {/* Custom Events Section */}
      <section id="custom-events" className="scroll-mt-20 w-full">
        <CustomEvents />
      </section>
      
      {/* Rules Section */}
      <section id="rules" className="scroll-mt-20 w-full">
        <Rules />
      </section>
      
      {/* Partners Section */}
      <section id="partners" className="scroll-mt-20 w-full">
        <Partners />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 w-full">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
