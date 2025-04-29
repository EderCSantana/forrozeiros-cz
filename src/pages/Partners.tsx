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
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-green text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Our Partners
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            The organizations and businesses that help make our events possible
          </p>
        </div>
      </section>
      
      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <h2 className="text-3xl font-display font-medium mb-12 text-dance-brown text-center">
            Our Valued Partners
          </h2>
          
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
      
      {/* Partnership Benefits */}
      <section className="py-16 bg-dance-cream bg-opacity-30">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-medium mb-6 text-dance-brown">
                Partnership Benefits
              </h2>
              <p className="text-dance-black text-opacity-80 mb-6">
                By partnering with DanceEvent, organizations gain access to our vibrant community and contribute to the promotion of cultural exchange through dance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-orange">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Brand Visibility</h3>
                    <p className="text-dance-black text-opacity-80">
                      Reach our community through event promotions, website presence, and social media mentions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-orange">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Special Event Participation</h3>
                    <p className="text-dance-black text-opacity-80">
                      Opportunities to showcase products or services at our festivals and major events.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-orange">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Community Engagement</h3>
                    <p className="text-dance-black text-opacity-80">
                      Connect with a diverse audience passionate about dance and cultural exchange.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-orange">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Corporate Team-Building</h3>
                    <p className="text-dance-black text-opacity-80">
                      Exclusive workshop opportunities for your team or organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" 
                alt="Partnership benefits" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Become a Partner CTA */}
      <section className="py-16 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h2 className="text-3xl font-display font-medium mb-4">
            Become a Partner
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Interested in partnering with DanceEvent? We offer various partnership levels 
            tailored to different types of organizations and businesses.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-dance-orange hover:bg-dance-orange/90 text-white py-3 px-8 rounded-md shadow-md transition-all duration-300 font-medium"
          >
            Contact Us to Learn More
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Partners;
