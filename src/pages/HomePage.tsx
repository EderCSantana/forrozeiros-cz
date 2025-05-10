
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
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="scroll-mt-20">
        <Index />
      </section>
      
      {/* About Forró Section */}
      <section id="about-forro" className="scroll-mt-20">
        <AboutForro />
      </section>
      
      {/* About Us Section */}
      <section id="about-us" className="scroll-mt-20">
        <AboutUs />
      </section>
      
      {/* Events Section */}
      <section id="events" className="scroll-mt-20">
        <Events />
      </section>
      
      {/* Custom Events Section */}
      <section id="custom-events" className="scroll-mt-20">
        <CustomEvents />
      </section>
      
      {/* Rules Section */}
      <section id="rules" className="scroll-mt-20">
        <Rules />
      </section>
      
      {/* Partners Section */}
      <section id="partners" className="scroll-mt-20">
        <Partners />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
