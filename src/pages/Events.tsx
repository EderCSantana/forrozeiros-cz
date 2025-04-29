
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();
  
  // Sample events data
  const upcomingEvents = [
    // We'll populate this later with event data
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("events.title")} />
      
      <main className="flex-grow py-12 bg-white">
        <div className="container-fluid mx-auto">
          <h2 className="text-2xl md:text-3xl font-display mb-8">{t("events.upcoming_events")}</h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event cards will go here */}
              <p>Coming soon: Event listings</p>
            </div>
          ) : (
            <p className="text-center py-8 text-dance-brown text-opacity-70">
              {t("events.no_upcoming_events")}
            </p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
