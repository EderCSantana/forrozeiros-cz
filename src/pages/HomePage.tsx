
import React, { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Carousel from "../components/Carousel";
import TitleStripe from "../components/TitleStripe";
import carouselImages from "../data/carouselImages";
import { PartyPopper, Music, Users, School, University, Building, HandHeart, Gift, Calendar, Shield, BookOpen, Coffee } from "lucide-react";

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [translations, setTranslations] = useState<any>({
    welcome: { title: "", content: "" },
    mission: { title: "", content: "" },
    updates: { title: "", items: [] }
  });
  const [calendarHeight, setCalendarHeight] = useState(600);

  useEffect(() => {
    // Use dynamic import to load translations
    import(`../translations/sections/home.json`)
      .then((module) => {
        setTranslations(module[language.toLowerCase()] || {});
      })
      .catch((error) => {
        console.error("Failed to load translations:", error);
      });
      
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
  }, [language]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1">
      {/* Home Section */}
      <section id="home" className="scroll-mt-20">
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

          {/* Calendar Section for Homepage */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-dance-brown">
              {t('events.upcoming') || "Upcoming Events"}
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
      </section>

      {/* About Forró Section */}
      <section id="about-forro" className="scroll-mt-20">
        <TitleStripe title={t("nav.about_forro")} />
        <div className="min-h-section-content bg-dance-beige">
          {/* Content from AboutForro.tsx would go here */}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="scroll-mt-20">
        <TitleStripe title={t("nav.about_us")} />
        <div className="min-h-section-content bg-dance-beige">
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
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="scroll-mt-20">
        <TitleStripe title={t("nav.events")} />
        <div className="min-h-section-content bg-dance-beige">
          {/* Content from Events.tsx would go here */}
        </div>
      </section>

      {/* Custom Events Section */}
      <section id="custom-events" className="scroll-mt-20">
        <TitleStripe title={t("nav.custom_events")} />
        <div className="min-h-section-content bg-dance-beige">
          <div className="container-fluid mx-auto py-8 md:py-12">
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
      </section>

      {/* Rules Section */}
      <section id="rules" className="scroll-mt-20">
        <TitleStripe title={t("nav.rules")} />
        <div className="min-h-section-content bg-white">
          <div className="container-fluid max-w-4xl mx-auto py-12">
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-medium text-dance-brown mb-4">{t("rules.subtitle")}</h2>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-dance-orange" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium">{t("rules.general_rules")}</h3>
              </div>
              
              <p className="text-dance-black text-opacity-80 mb-6">{t("rules.general_description")}</p>
              
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
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <Coffee className="text-dance-orange" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium">{t("rules.prostor_rules")}</h3>
              </div>
              
              <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
                <li>{t("rules.prostor.item1")}</li>
                <li>{t("rules.prostor.item2")}</li>
                <li>{t("rules.prostor.item3")}</li>
                <li>{t("rules.prostor.item4")}</li>
              </ul>
            </div>
            
            <div className="mb-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="text-dance-orange" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-medium">{t("rules.recommendations")}</h3>
              </div>
              
              <ul className="list-disc pl-6 space-y-3 text-dance-black text-opacity-80">
                <li>{t("rules.recommendations.item1")}</li>
                <li>{t("rules.recommendations.item2")}</li>
                <li>{t("rules.recommendations.item3")}</li>
                <li>{t("rules.recommendations.item4")}</li>
                <li>{t("rules.recommendations.item5")}</li>
                <li>{t("rules.recommendations.item6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="scroll-mt-20">
        <TitleStripe title={t("nav.partners")} />
        <div className="min-h-section-content bg-dance-beige">
          {/* Content from Partners.tsx would go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <TitleStripe title={t("nav.contact")} />
        <div className="min-h-section-content bg-dance-beige">
          {/* Content from Contact.tsx would go here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
