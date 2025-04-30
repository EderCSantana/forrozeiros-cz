
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";
import { Shield, Users, User, BookOpen, Coffee } from "lucide-react";

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
      <TitleStripe title={t("rules.title")} />
      
      <main className="flex-grow py-12 md:py-16 bg-white">
        <div className="container-fluid max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-medium text-dance-brown mb-4">{t("rules.subtitle")}</h2>
          </div>
          
          <RulesSection 
            title={t("rules.general_rules")}
            description={t("rules.general_description")}
            icon={Users}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.general.item1")}</li>
              <li>{t("rules.general.item2")}</li>
              <li>{t("rules.general.item3")}</li>
              <li>{t("rules.general.item4")}</li>
              <li>{t("rules.general.item5")}</li>
              <li>{t("rules.general.item6")}</li>
              <li>{t("rules.general.item7")}</li>
              <li>{t("rules.general.item8")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.prostor_rules")}
            icon={Coffee}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.prostor.item1")}</li>
              <li>{t("rules.prostor.item2")}</li>
              <li>{t("rules.prostor.item3")}</li>
              <li>{t("rules.prostor.item4")}</li>
            </ul>
          </RulesSection>
          
          <RulesSection 
            title={t("rules.recommendations")}
            icon={BookOpen}
          >
            <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
              <li>{t("rules.recommendations.item1")}</li>
              <li>{t("rules.recommendations.item2")}</li>
              <li>{t("rules.recommendations.item3")}</li>
              <li>{t("rules.recommendations.item4")}</li>
              <li>{t("rules.recommendations.item5")}</li>
              <li>{t("rules.recommendations.item6")}</li>
            </ul>
          </RulesSection>
        </div>
      </main>
    </div>
  );
};

export default Rules;
