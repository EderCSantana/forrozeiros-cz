import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";

const Events = () => {
  const { t } = useLanguage();
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Forró Festival",
      date: "July 15-17, 2023",
      time: "All day",
      location: "Central Park, New York",
      description: "Our annual three-day festival featuring workshops, live music, and social dancing. Special guest teachers from Brazil!",
      imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Festival",
      featured: true
    },
    {
      id: 2,
      title: "Weekly Forró Social",
      date: "Every Friday",
      time: "8:00 PM - 11:00 PM",
      location: "Dance Studio, 123 Rhythm Street",
      description: "Our regular social dance with a beginner-friendly class at the start. Live music on the first Friday of each month!",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Social Dance",
      featured: false
    },
    {
      id: 3,
      title: "Beginner Forró Workshop",
      date: "June 10, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center, 456 Dance Avenue",
      description: "A comprehensive introduction to forró for absolute beginners. Learn the basic steps, rhythm, and connection.",
      imageUrl: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80",
      category: "Workshop",
      featured: false
    },
    {
      id: 4,
      title: "Forró Beach Party",
      date: "August 5, 2023",
      time: "4:00 PM - 10:00 PM",
      location: "Sunset Beach",
      description: "Dance forró by the ocean as the sun sets! Food and refreshments available. Live band performance.",
      imageUrl: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      category: "Special Event",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("events.title")} />
      
      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <h2 className="text-3xl font-display font-medium mb-10 text-dance-brown">
            Featured Events
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents
              .filter(event => event.featured)
              .map(event => (
                <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md border border-dance-cream hover:shadow-lg transition-shadow duration-300">
                  <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-dance-orange text-white text-xs px-2 py-1 rounded">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-medium mb-2 text-dance-black">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-dance-brown mb-2">
                      <CalendarDays size={16} className="mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-dance-brown mb-2">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-dance-brown mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-dance-black text-opacity-80 mb-4">
                      {event.description}
                    </p>
                    <a 
                      href={`/events/${event.id}`} 
                      className="inline-block bg-dance-brown hover:bg-dance-brown/90 text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                      Event Details
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* All Upcoming Events */}
      <section className="py-16 bg-dance-cream bg-opacity-30">
        <div className="container-fluid mx-auto">
          <h2 className="text-3xl font-display font-medium mb-10 text-dance-brown">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-dance-cream hover:shadow-md transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-dance-brown bg-opacity-10 text-dance-brown text-xs px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-medium mb-2 text-dance-black">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-dance-brown mb-2">
                    <CalendarDays size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-dance-brown mb-2">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-dance-brown mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <a 
                    href={`/events/${event.id}`} 
                    className="inline-block bg-dance-orange hover:bg-dance-orange/90 text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    Event Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Regular Classes */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <h2 className="text-3xl font-display font-medium mb-6 text-dance-brown">
            Regular Classes
          </h2>
          <p className="text-dance-black text-opacity-80 mb-10 max-w-3xl">
            Our weekly classes cater to all levels, from complete beginners to advanced dancers. 
            No partner or previous experience is required to join!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Beginner Class */}
            <div className="flex bg-dance-cream bg-opacity-20 rounded-lg p-6">
              <div className="mr-6">
                <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center">
                  <Users className="text-dance-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-medium mb-2 text-dance-black">
                  Beginner Forró
                </h3>
                <div className="flex items-center text-dance-brown mb-2">
                  <CalendarDays size={16} className="mr-2" />
                  <span className="text-sm">Every Monday</span>
                </div>
                <div className="flex items-center text-dance-brown mb-2">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center text-dance-brown mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Dance Studio, 123 Rhythm Street</span>
                </div>
                <p className="text-dance-black text-opacity-80 mb-4">
                  Perfect for those who are new to forró. Learn the basic steps, rhythm, and connection in a friendly, supportive environment.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-dance-brown hover:bg-dance-brown/90 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Register
                </a>
              </div>
            </div>
            
            {/* Intermediate Class */}
            <div className="flex bg-dance-cream bg-opacity-20 rounded-lg p-6">
              <div className="mr-6">
                <div className="w-12 h-12 bg-dance-blue bg-opacity-10 rounded-full flex items-center justify-center">
                  <Users className="text-dance-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-medium mb-2 text-dance-black">
                  Intermediate Forró
                </h3>
                <div className="flex items-center text-dance-brown mb-2">
                  <CalendarDays size={16} className="mr-2" />
                  <span className="text-sm">Every Wednesday</span>
                </div>
                <div className="flex items-center text-dance-brown mb-2">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center text-dance-brown mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Dance Studio, 123 Rhythm Street</span>
                </div>
                <p className="text-dance-black text-opacity-80 mb-4">
                  For dancers who know the basics and want to expand their repertoire with more complex movements and musicality.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-dance-brown hover:bg-dance-brown/90 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA - Private Events */}
      <section className="py-16 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h2 className="text-3xl font-display font-medium mb-4">
            Private Events
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Planning a special occasion? Consider a forró-themed event! We offer private workshops, 
            performances, and custom experiences for corporate events, parties, and celebrations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-dance-orange hover:bg-dance-orange/90 text-white py-3 px-8 rounded-md shadow-md transition-all duration-300 font-medium"
          >
            Inquire Now
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
