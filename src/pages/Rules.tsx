import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";
import { Shield, Users, User, BookOpen } from "lucide-react";

const RulesSection = ({ 
  title, 
  description, 
  icon: Icon, 
  children 
}: { 
  title: string; 
  description?: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="mb-16">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
        <Icon className="text-dance-orange" size={24} />
      </div>
      <h3 className="text-2xl md:text-3xl font-display font-medium">{title}</h3>
    </div>
    
    {description && <p className="text-dance-black text-opacity-80 mb-6">{description}</p>}
    
    {children}
  </div>
);

const Rules = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("rules.title")} />
      
      <main className="flex-grow py-12 md:py-16 bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-medium text-dance-brown mb-4">{t("rules.subtitle")}</h2>
          </div>
          
          <RulesSection 
            title={t("rules.community_guidelines")}
            description={t("rules.community_description")}
            icon={Users}
          >
            {/* Adding children content to fix the error */}
            <p className="text-dance-black text-opacity-80">
              Our community thrives on mutual respect and shared passion for dance.
            </p>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.respect_consent")}
            icon={User}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.respect.item1")}</li>
              <li>{t("rules.respect.item2")}</li>
              <li>{t("rules.respect.item3")}</li>
              <li>{t("rules.respect.item4")}</li>
              <li>{t("rules.respect.item5")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.floor_etiquette")}
            icon={BookOpen}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.floor.item1")}</li>
              <li>{t("rules.floor.item2")}</li>
              <li>{t("rules.floor.item3")}</li>
              <li>{t("rules.floor.item4")}</li>
              <li>{t("rules.floor.item5")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.inclusivity")}
            icon={Users}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.inclusivity.item1")}</li>
              <li>{t("rules.inclusivity.item2")}</li>
              <li>{t("rules.inclusivity.item3")}</li>
              <li>{t("rules.inclusivity.item4")}</li>
              <li>{t("rules.inclusivity.item5")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.hygiene")}
            icon={User}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.hygiene.item1")}</li>
              <li>{t("rules.hygiene.item2")}</li>
              <li>{t("rules.hygiene.item3")}</li>
              <li>{t("rules.hygiene.item4")}</li>
              <li>{t("rules.hygiene.item5")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.conduct")}
            icon={BookOpen}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.conduct.item1")}</li>
              <li>{t("rules.conduct.item2")}</li>
              <li>{t("rules.conduct.item3")}</li>
              <li>{t("rules.conduct.item4")}</li>
              <li>{t("rules.conduct.item5")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.violations")}
            description={t("rules.violations_description")}
            icon={Shield}
          >
            <div className="space-y-6 text-dance-black text-opacity-80">
              <div>
                <h4 className="font-bold mb-1">{t("rules.first_occurrence")}</h4>
                <p>{t("rules.first_occurrence_description")}</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-1">{t("rules.second_occurrence")}</h4>
                <p>{t("rules.second_occurrence_description")}</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-1">{t("rules.serious_violations")}</h4>
                <p>{t("rules.serious_violations_description")}</p>
              </div>
              
              <div>
                <h4 className="font-bold mb-1">{t("rules.immediate_ejection")}</h4>
                <p>{t("rules.immediate_ejection_description")}</p>
              </div>
            </div>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.reporting")}
            description={t("rules.reporting_description")}
            icon={Shield}
          >
            <div className="bg-dance-beige bg-opacity-50 p-6 rounded-lg space-y-3 text-dance-black text-opacity-80">
              <p>{t("rules.reporting_email")}</p>
              <p>{t("rules.reporting_phone")}</p>
              <p className="italic">{t("rules.reporting_confidential")}</p>
            </div>
          </RulesSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rules;
