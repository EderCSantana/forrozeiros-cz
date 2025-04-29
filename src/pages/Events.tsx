import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarDays, MapPin, Clock, Users, Music, Ticket } from "lucide-react";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
                title={t("events.weekly_title")}
                image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600"
              >
                <p className="flex items-center gap-2"><Clock size={18} className="text-dance-brown" /> {t("events.weekly_when")}</p>
                <p className="flex items-center gap-2"><Users size={18} className="text-dance-brown" /> {t("events.weekly_format")}</p>
                <p>{t("events.weekly_after")}</p>
                <p>{t("events.weekly_summer")}</p>
                <p>{t("events.weekly_rules")}</p>
                <p>{t("events.weekly_contribution")}</p>
              </EventSection>
              
              <EventSection 
                title={t("events.letna_title")}
                image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=600"
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
                image="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=600"
              >
                <p className="flex items-center gap-2"><Music size={18} className="text-dance-brown" /> {t("events.partner_concerts")}</p>
                <p className="flex items-center gap-2"><CalendarDays size={18} className="text-dance-brown" /> {t("events.partner_schedule")}</p>
                <p className="flex items-center gap-2"><Ticket size={18} className="text-dance-brown" /> {t("events.partner_entrance")}</p>
              </EventSection>
            </TabsContent>
            
            {/* Other Events Tab Content */}
            <TabsContent value="other" className="space-y-8">
              <EventSection 
                title={t("events.seasonal_title")}
                image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&h=600"
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
                title={t("events.nearby_title")}
                image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&h=600"
                imageOnLeft={true}
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
