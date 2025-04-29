
import { PartyPopper, Music, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleStripe from "../components/TitleStripe";

// Forró logo component
const ForroLogo = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-dance-green forro-logo text-3xl relative">
        <span className="block">FO</span>
        <span className="block">R</span>
        <span className="block text-dance-orange">Z</span>
        <span className="block">EI</span>
        <span className="block">ROS</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dance-beige">
      <Header />
      
      
      
      <Footer />
    </div>
  );
};

export default AboutUs;
