
import { PartyPopper, Music, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";


const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-dance-beige">
      <Header />
      
      <TitleStripe title={t("about_us.title")} />
      
      <main className="flex-grow container-fluid mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-dance-brown mb-6">
              {t("about_us.story_title")}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                {t("about_us.story_p1")}
              </p>
              
              <p className="leading-relaxed">
                {t("about_us.story_p2")}
              </p>
              
              <p className="leading-relaxed">
                {t("about_us.story_p3")}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
