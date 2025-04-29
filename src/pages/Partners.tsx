import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";

const Partners = () => {
  const { t } = useLanguage();
  // Sample partner data
  const partners = [
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("partners.title")} />
      

      
      {/* Partners Grid - Removed "Our Valued Partners" heading */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          {/* Heading removed as requested */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map(partner => (
              <div key={partner.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-dance-cream transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="mb-4 h-24 flex items-center justify-center">
                    <img 
                      src={partner.logoUrl} 
                      alt={`${partner.name} logo`} 
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-2 text-dance-black">
                    {partner.name}
                  </h3>
                  <span className="inline-block bg-dance-cream text-dance-brown text-xs px-2 py-1 rounded mb-3">
                    {partner.category}
                  </span>
                  <p className="text-dance-black text-opacity-80 mb-4">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-dance-orange hover:bg-dance-orange/90 text-white py-2 px-4 rounded transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
<<<<<<< HEAD

      
=======
    
>>>>>>> 01e2f6f604e091cf0c1531f7330bdbc0c35b909e
      <Footer />
    </div>
  );
};

export default Partners;
