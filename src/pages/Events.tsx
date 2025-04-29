
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarDays, MapPin, Clock, Users, Music, Ticket, PenSquare, FileText } from "lucide-react";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const Events = () => {
  const { t } = useLanguage();
  
  // Event section component for consistent styling
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
  }) => (
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
                  src={image} 
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("events.title")} />
      
      <main className="flex-grow py-12 bg-white">
        <div className="container-fluid mx-auto">
          
          <div className="space-y-8">
            {/* Weekly Events in Prostor Section */}
            <EventSection 
              title={t("events.weekly_prostor_title")}
              image="/lovable-uploads/2cae19c8-c3d2-4964-ae04-bf0e54d92caf.png"
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
              image="/lovable-uploads/ca5e9a2a-1a24-4954-b0f2-1ec1bef8945a.png"
              imageOnLeft={true}
            >
              <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.letna_when")}</p>
              <p className="flex items-center gap-2"><MapPin size={18} className="text-dance-brown" /> {t("events.letna_where")}</p>
              <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.letna_schedule")}</p>
              <p className="flex items-center gap-2"><FileText size={18} className="text-dance-brown" /> {t("events.letna_rules")}</p>
            </EventSection>
            
            {/* Concerts of Três Corações Section */}
            <EventSection 
              title={t("events.concerts_title")}
              image="/lovable-uploads/93254ed9-ab60-412d-9531-191dc5ecac94.png"
            >
              <p className="flex items-center gap-2"><Music size={18} className="text-dance-brown" /> {t("events.concerts_description")}</p>
              <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.concerts_schedule")}</p>
              <p className="flex items-center gap-2"><Ticket size={18} className="text-dance-brown" /> {t("events.concerts_entrance")}</p>
              <p className="flex items-center gap-2"><FileText size={18} className="text-dance-brown" /> {t("events.concerts_rules")}</p>
            </EventSection>
            
            {/* Seasonal Events Section */}
            <EventSection 
              title={t("events.seasonal_title")}
              image="/lovable-uploads/90324c40-1385-412b-9fc0-18f075634823.png"
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
              image="/lovable-uploads/abf8c344-9fb4-470e-8e0f-af49193ff973.png"
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
            
            {/* Custom Events Section - Link to Custom Events Page */}
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
