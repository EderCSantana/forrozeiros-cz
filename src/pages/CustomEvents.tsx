
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { School, University, Building, HandHeart, Gift, Calendar } from "lucide-react";

const CustomEvents = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container-fluid mx-auto py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-dance-brown">
            {t("custom_events.title")}
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg mb-6">
              {t("custom_events.intro")}
            </p>
            <p className="text-xl font-medium text-dance-brown mb-6">
              {t("custom_events.help_intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <School className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.schools_title")}</h3>
              </div>
              <p>{t("custom_events.schools_content")}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <University className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.universities_title")}</h3>
              </div>
              <p>{t("custom_events.universities_content")}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Building className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.team_building_title")}</h3>
              </div>
              <p>{t("custom_events.team_building_content")}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <HandHeart className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.nonprofit_events_title")}</h3>
              </div>
              <p>{t("custom_events.nonprofit_events_content")}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Gift className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.nonprofit_projects_title")}</h3>
              </div>
              <p>{t("custom_events.nonprofit_projects_content")}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="text-dance-orange mr-3" size={28} />
                <h3 className="text-xl font-semibold text-dance-brown">{t("custom_events.public_events_title")}</h3>
              </div>
              <p>{t("custom_events.public_events_content")}</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-dance-cream bg-opacity-50 rounded-lg">
            <p className="text-center italic">
              {t("custom_events.assistance")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomEvents;
