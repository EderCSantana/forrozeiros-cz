
import React, { useState, useEffect } from "react";
import { CalendarDays, MapPin, Clock, Users, Music, Ticket, PenSquare, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EventSection = ({ 
  title, 
  image, 
  children, 
  imageOnLeft = false 
}: { 
  title: string; 
  image?: string; 
  children: React.ReactNode; 
  imageOnLeft?: boolean 
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="py-8 first:pt-0">
      <h3 className="text-2xl font-display font-bold mb-6 text-dance-brown">{title}</h3>
      <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-start`}>
        <div className="flex-1 md:flex-grow md:w-2/3">
          <div className="prose max-w-none space-y-4">
            {children}
          </div>
        </div>
        {image && (
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="rounded-full overflow-hidden border-4 border-dance-yellow shadow-lg">
              <AspectRatio ratio={1 / 1}>
                <img 
                  src={image.startsWith('http') ? image : baseUrl + image.replace(/^\//, '')} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        )}
      </div>
      <Separator className="mt-8" />
    </div>
  );
};

const Events = () => {
  const { t } = useLanguage();
  const [calendarHeight, setCalendarHeight] = useState(600);
  const baseUrl = import.meta.env.BASE_URL;
  
  useEffect(() => {
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
    <div className="min-h-screen flex flex-col">
      <TitleStripe title={t("events.title")} />
      
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Weekly Events in Prostor Section */}
            <EventSection 
              title={t("events.weekly_prostor_title")}
              image={baseUrl + "lovable-uploads/2cae19c8-c3d2-4964-ae04-bf0e54d92caf.png"}
            >
              <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.weekly_when")}</p>
              <p className="flex items-center gap-2"><Users size={18} className="text-dance-brown" /> {t("events.weekly_format")}</p>
              <p>{t("events.weekly_after")}</p>
              <p>{t("events.weekly_summer")}</p>
              <p className="flex items-center gap-2"><FileText size={18} className="text-dance-brown" /> {t("events.weekly_rules")}</p>
              <p>{t("events.weekly_contribution")}</p>
            </EventSection>
            
            {/* Weekly Events in Letna Section */}
            <EventSection 
              title={t("events.letna_title")}
              image={baseUrl + "lovable-uploads/a6572eb9-c316-45bf-9e11-2e8bfc2ff42c.png"}
              imageOnLeft={true}
            >
              <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.letna_when")}</p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-dance-brown" /> {t("events.letna_where")}</p>
              <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.letna_schedule")}</p>
              <p className="flex items-center gap-2"><FileText size={18} className="text-dance-brown" /> {t("events.letna_rules")}</p>
            </EventSection>
            
            {/* Concerts Section */}
            <EventSection 
              title={t("events.concerts_title")}
              image={baseUrl + "lovable-uploads/93254ed9-ab60-412d-9531-191dc5ecac94.png"}
            >
              <p className="flex items-center gap-2"><Music size={18} className="text-dance-brown" /> {t("events.concerts_description")}</p>
              <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.concerts_schedule")}</p>
              <p className="flex items-center gap-2"><Ticket size={18} className="text-dance-brown" /> {t("events.concerts_entrance")}</p>
              <p className="flex items-center gap-2"><FileText size={18} className="text-dance-brown" /> {t("events.concerts_rules")}</p>
            </EventSection>
            
            {/* Seasonal Events Section */}
            <EventSection 
              title={t("events.seasonal_title")}
              image={baseUrl + "lovable-uploads/90324c40-1385-412b-9fc0-18f075634823.png"}
              imageOnLeft={true}
            >
              <p>{t("events.seasonal_intro")}</p>
              <ul className="list-disc pl-5">
                <li>{t("events.seasonal_lusofona")}</li>
                <li>{t("events.seasonal_kinobrasil")}</li>
                <li>{t("events.seasonal_brazilfest")}</li>
                <li>{t("events.seasonal_festas")}</li>
              </ul>
              <p className="italic">{t("events.seasonal_note")}</p>
              <p className="flex items-center gap-2 mt-4"><FileText size={18} className="text-dance-brown" /> {t("events.seasonal_rules")}</p>
            </EventSection>
            
            {/* Nearby Events Section */}
            <EventSection 
              title={t("events.nearby_title")}
              image={baseUrl + "lovable-uploads/388cb454-d069-4e71-9e8c-a8487c1f074c.png"}
            >
              <p>{t("events.nearby_intro")}</p>
              <ul className="list-disc pl-5">
                <li>{t("events.nearby_brno")}</li>
                <li>{t("events.nearby_dresden")}</li>
                <li>{t("events.nearby_budapest")}</li>
              </ul>
              <p>{t("events.nearby_check")}</p>
              <p className="flex items-center gap-2 mt-4"><FileText size={18} className="text-dance-brown" /> {t("events.nearby_rules")}</p>
            </EventSection>
            
            {/* Custom Events Section */}
            <div className="py-8">
              <h3 className="text-2xl font-display font-bold mb-6 text-dance-brown">{t("events.custom_events_title")}</h3>
              <div className="prose max-w-none space-y-4">
                <p>{t("events.custom_events_description")}</p>
                <p>{t("events.custom_events_private")}</p>
                <p className="flex items-center gap-2 mt-4"><FileText size={18} className="text-dance-brown" /> {t("events.custom_events_rules")}</p>
                <div className="mt-6">
                  <Link to="/custom-events" className="inline-flex items-center gap-2 px-4 py-2 bg-dance-orange text-white rounded-md hover:bg-dance-brown transition-colors duration-300">
                    <PenSquare size={18} /> {t("events.custom_events_learn_more")}
                  </Link>
                </div>
              </div>
              <Separator className="mt-8" />
            </div>
          </div>
          
          {/* Google Calendar Section */}
          <div className="py-8 mt-8">
            <h3 className="text-2xl font-display font-bold mb-6 text-dance-brown">{t("events.upcoming")}</h3>
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
      </main>
    </div>
  );
};

export default Events;
