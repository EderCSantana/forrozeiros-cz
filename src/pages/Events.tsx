
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarDays, MapPin, Clock, Users, Music, Ticket, PenSquare } from "lucide-react";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    image: string; 
    children: React.ReactNode; 
    imageOnLeft?: boolean 
  }) => (
    <div className="py-8 first:pt-0">
      <h3 className="text-2xl font-display font-bold mb-6 text-dance-brown">{title}</h3>
      <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}>
        <div className="flex-1">
          <div className="prose max-w-none space-y-4">
            {children}
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
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
          <p className="text-center text-lg mb-10">{t("events.subtitle")}</p>
          
          <Tabs defaultValue="regular" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="regular" className="flex-1 md:flex-none">Regular Events</TabsTrigger>
              <TabsTrigger value="partner" className="flex-1 md:flex-none">Partner Events</TabsTrigger>
              <TabsTrigger value="other" className="flex-1 md:flex-none">Other Events</TabsTrigger>
            </TabsList>
            
            {/* Regular Events Tab Content */}
            <TabsContent value="regular" className="space-y-4">
              <EventSection 
                title={t("events.weekly_title_new")}
                image="/lovable-uploads/2cae19c8-c3d2-4964-ae04-bf0e54d92caf.png"
              >
                <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.weekly_when")}</p>
                <p className="flex items-center gap-2"><Users size={18} className="text-dance-brown" /> {t("events.weekly_format")}</p>
                <p>{t("events.weekly_after")}</p>
                <p>{t("events.weekly_summer")}</p>
                <p>{t("events.weekly_rules")}</p>
                <p>{t("events.weekly_contribution")}</p>
              </EventSection>
              
              <EventSection 
                title={t("events.letna_title_new")}
                image="/lovable-uploads/2b8c018f-ce33-4f4f-b82e-be1f678ab5ea.png"
                imageOnLeft={true}
              >
                <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.letna_when")}</p>
                <p className="flex items-center gap-2"><MapPin size={18} className="text-dance-brown" /> {t("events.letna_where")}</p>
                <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.letna_schedule")}</p>
              </EventSection>
            </TabsContent>
            
            {/* Partner Events Tab Content */}
            <TabsContent value="partner" className="space-y-4">
              <EventSection 
                title={t("events.partner_title")}
                image="/lovable-uploads/16fc820e-4071-48a1-9ef2-b11d7b121c53.png"
              >
                <p className="flex items-center gap-2"><Music size={18} className="text-dance-brown" /> {t("events.partner_concerts")}</p>
                <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.partner_schedule")}</p>
                <p className="flex items-center gap-2"><Ticket size={18} className="text-dance-brown" /> {t("events.partner_entrance")}</p>
              </EventSection>
            </TabsContent>
            
            {/* Other Events Tab Content */}
            <TabsContent value="other" className="space-y-8">
              <EventSection 
                title={t("events.seasonal_title_new")}
                image="/lovable-uploads/abf8c344-9fb4-470e-8e0f-af49193ff973.png"
              >
                <p>{t("events.seasonal_intro")}</p>
                <ul className="list-disc pl-5">
                  <li>{t("events.seasonal_lusofona")}</li>
                  <li>{t("events.seasonal_kinobrasil")}</li>
                  <li>{t("events.seasonal_brazilfest")}</li>
                  <li>{t("events.seasonal_festas")}</li>
                </ul>
                <p className="italic">{t("events.seasonal_note")}</p>
              </EventSection>
              
              <EventSection 
                title={t("events.others_title")}
                image="/lovable-uploads/abf8c344-9fb4-470e-8e0f-af49193ff973.png"
                imageOnLeft={true}
              >
                <p>{t("events.others_description")}</p>
                <p className="flex items-center gap-2 mt-4">
                  <PenSquare size={18} className="text-dance-brown" /> {t("events.contact_us")}
                </p>
              </EventSection>
              
              <EventSection 
                title={t("events.nearby_title")}
                image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&h=600"
                imageOnLeft={false}
              >
                <p>{t("events.nearby_intro")}</p>
                <ul className="list-disc pl-5">
                  <li>{t("events.nearby_brno")}</li>
                  <li>{t("events.nearby_dresden")}</li>
                  <li>{t("events.nearby_budapest")}</li>
                </ul>
                <p>{t("events.nearby_check")}</p>
              </EventSection>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
