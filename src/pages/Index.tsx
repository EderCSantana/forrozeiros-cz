
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import UpdateCard from "../components/UpdateCard";
import { Calendar, ArrowRight, Users, Music } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  // Placeholder images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "People dancing forró"
    },
    {
      src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      alt: "Forró dance event"
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      alt: "Brazilian culture celebration"
    }
  ];

  // Define the missing latestUpdates array
  const latestUpdates = [
    {
      id: 1,
      title: "Weekly Dance Party",
      date: "2025-05-10",
      content: "Join us for our weekly dance party with live music and great atmosphere!",
      tags: ["party", "dance"],
      imageUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Beginner Workshop",
      date: "2025-05-15",
      content: "Learn the basics of forró dancing with our experienced instructors.",
      tags: ["workshop", "beginners"],
      imageUrl: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Live Band: Trio Nordestino",
      date: "2025-05-22",
      content: "Experience authentic forró music with special guest band Trio Nordestino.",
      tags: ["live music", "special"],
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Carousel */}
      <section className="relative">
        <Carousel images={carouselImages} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center">
            <h2 className="text-white text-xl md:text-2xl font-light mt-4">Experience the joy of Brazilian dance</h2>
            <div className="mt-8">
              <a 
                href="/events" 
                className="forro-button inline-block mx-2"
              >
                Join an Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-dance-cream bg-opacity-30">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-dance-cream text-center animate-fade-up">
              <div className="w-16 h-16 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-dance-orange" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Regular Events</h3>
              <p className="text-dance-black text-opacity-75">
                Join our weekly dance parties and special events throughout the year.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-dance-cream text-center animate-fade-up animate-delay-200">
              <div className="w-16 h-16 bg-dance-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-dance-blue" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Community</h3>
              <p className="text-dance-black text-opacity-75">
                Be part of our vibrant international community of dance enthusiasts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-dance-cream text-center animate-fade-up animate-delay-400">
              <div className="w-16 h-16 bg-dance-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-dance-green" />
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Live Music</h3>
              <p className="text-dance-black text-opacity-75">
                Experience authentic Brazilian rhythms with our talented musicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">Latest Updates</h2>
            <p className="text-dance-black text-opacity-75 max-w-2xl mx-auto">
              Stay informed about our newest events, classes, and community news.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestUpdates.map((update) => (
              <UpdateCard 
                key={update.id}
                title={update.title}
                date={update.date}
                content={update.content}
                tags={update.tags}
                imageUrl={update.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center text-dance-orange hover:text-dance-brown transition-colors duration-300">
              <span className="mr-2">View all updates</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
