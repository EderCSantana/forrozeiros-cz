
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Carousel from "../components/Carousel";
import UpdateCard from "../components/UpdateCard";
import TitleStripe from "../components/TitleStripe";
import carouselImages from "../data/carouselImages";

const Index: React.FC = () => {
  const { language, t } = useLanguage();
  const [calendarHeight, setCalendarHeight] = useState(600);

  useEffect(() => {
    // Adjust calendar height based on window size
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCalendarHeight(400);
      } else if (width < 1024) {
        setCalendarHeight(500);
      } else {
        setCalendarHeight(600);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="flex-1">
      <Carousel images={carouselImages} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {t('home.welcome.title')}
            </h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: t('home.welcome.content'),
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {t('home.mission.title')}
            </h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: t('home.mission.content') }}
            />
          </div>
        </div>

        {/* Latest Updates Section - Commented out as requested
        <div className="mt-16">
          <TitleStripe title={t('home.updates.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <UpdateCard
                key={index}
                date={t(`home.updates.items.${index}.date`)}
                title={t(`home.updates.items.${index}.title`)}
                content={t(`home.updates.items.${index}.content`)}
                link={t(`home.updates.items.${index}.link`)}
                linkText={t(`home.updates.items.${index}.linkText`)}
              />
            ))}
          </div>
        </div>
        */}
        
        {/* Calendar Section for Homepage */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-dance-brown">
            {t('home.calendar.title')}
          </h2>
          <div className="w-full rounded-lg shadow-lg overflow-hidden border border-dance-orange">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=e8ddb3cd29730329a30172cb6608bbe61305f3e2474c25aca8f2d91493d4856b%40group.calendar.google.com&src=96a92991a19223a6af005363e4dd8ab3f165f54838946d445ddd55e24d23d02d%40group.calendar.google.com&ctz=Europe%2FPrague&bgcolor=%23FFF1D0&color=%23B84C00&color=%23FF9900" 
              width="100%" 
              height={calendarHeight} 
              frameBorder="0" 
              scrolling="no"
              title="Forró Events Calendar"
              className="bg-dance-beige"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
