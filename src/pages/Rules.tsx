
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

const Rules = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-red text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            {t("rules.title")}
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {t("rules.subtitle")}
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-display font-medium mb-4 text-dance-brown">
                {t("rules.community_guidelines")}
              </h2>
              <p className="text-dance-black text-opacity-80 mb-6">
                {t("rules.community_description")}
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    {t("rules.respect_consent")}
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>{t("rules.respect.item1")}</li>
                    <li>{t("rules.respect.item2")}</li>
                    <li>{t("rules.respect.item3")}</li>
                    <li>{t("rules.respect.item4")}</li>
                    <li>{t("rules.respect.item5")}</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    {t("rules.floor_etiquette")}
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>{t("rules.floor.item1")}</li>
                    <li>{t("rules.floor.item2")}</li>
                    <li>{t("rules.floor.item3")}</li>
                    <li>{t("rules.floor.item4")}</li>
                    <li>{t("rules.floor.item5")}</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    {t("rules.inclusivity")}
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>{t("rules.inclusivity.item1")}</li>
                    <li>{t("rules.inclusivity.item2")}</li>
                    <li>{t("rules.inclusivity.item3")}</li>
                    <li>{t("rules.inclusivity.item4")}</li>
                    <li>{t("rules.inclusivity.item5")}</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    {t("rules.hygiene")}
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>{t("rules.hygiene.item1")}</li>
                    <li>{t("rules.hygiene.item2")}</li>
                    <li>{t("rules.hygiene.item3")}</li>
                    <li>{t("rules.hygiene.item4")}</li>
                    <li>{t("rules.hygiene.item5")}</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    {t("rules.conduct")}
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>{t("rules.conduct.item1")}</li>
                    <li>{t("rules.conduct.item2")}</li>
                    <li>{t("rules.conduct.item3")}</li>
                    <li>{t("rules.conduct.item4")}</li>
                    <li>{t("rules.conduct.item5")}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-medium mb-4 text-dance-brown">
                {t("rules.violations")}
              </h2>
              <p className="text-dance-black text-opacity-80 mb-6">
                {t("rules.violations_description")}
              </p>
              
              <div className="space-y-4">
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">{t("rules.first_occurrence")}</h3>
                  <p className="text-dance-black text-opacity-80">
                    {t("rules.first_occurrence_description")}
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">{t("rules.second_occurrence")}</h3>
                  <p className="text-dance-black text-opacity-80">
                    {t("rules.second_occurrence_description")}
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">{t("rules.serious_violations")}</h3>
                  <p className="text-dance-black text-opacity-80">
                    {t("rules.serious_violations_description")}
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">{t("rules.immediate_ejection")}</h3>
                  <p className="text-dance-black text-opacity-80">
                    {t("rules.immediate_ejection_description")}
                  </p>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-dance-brown text-white rounded-lg">
                <h3 className="text-xl font-display font-medium mb-4">
                  {t("rules.reporting")}
                </h3>
                <p className="text-white text-opacity-90 mb-4">
                  {t("rules.reporting_description")}
                </p>
                <ul className="space-y-2 text-white text-opacity-90">
                  <li>{t("rules.reporting_email")}</li>
                  <li>{t("rules.reporting_phone")}</li>
                </ul>
                <p className="mt-4 text-white text-opacity-90">
                  {t("rules.reporting_confidential")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rules;
