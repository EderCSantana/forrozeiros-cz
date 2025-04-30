
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Carousel from "../components/Carousel";
import UpdateCard from "../components/UpdateCard";
import TitleStripe from "../components/TitleStripe";
import carouselImages from "../data/carouselImages";

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  const [translations, setTranslations] = useState<any>({
    welcome: { title: "", content: "" },
    mission: { title: "", content: "" },
    updates: { title: "", items: [] }
  });

  useEffect(() => {
    // Use dynamic import to load translations
    import(`../translations/sections/home.json`)
      .then((module) => {
        setTranslations(module[language.toLowerCase()] || {});
      })
      .catch((error) => {
        console.error("Failed to load translations:", error);
      });
  }, [language]);

  return (
    <div className="flex-1">
      <Carousel images={carouselImages} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {translations.welcome?.title || t('home.hero.title')}
            </h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: translations.welcome?.content || "",
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {translations.mission?.title || t('home.hero.subtitle')}
            </h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: translations.mission?.content || "" }}
            />
          </div>
        </div>

        {/* Latest Updates Section - Commented out as requested
        <div className="mt-16">
          <TitleStripe title={translations.updates?.title || t('home.updates.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {translations.updates?.items?.map((update: any, index: number) => (
              <UpdateCard
                key={index}
                date={update.date}
                title={update.title}
                content={update.content}
                link={update.link}
                linkText={update.linkText}
              />
            ))}
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Index;
