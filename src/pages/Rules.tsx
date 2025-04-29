import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";

const Rules = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("rules.title")} />
      
      
      <Footer />
    </div>
  );
};

export default Rules;
