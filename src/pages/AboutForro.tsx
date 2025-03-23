
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutForro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            About Forró
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Discover the rich history and cultural significance of this beautiful Brazilian dance
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-display font-medium mb-6 text-dance-brown">
                The Origins of Forró
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                Forró originated in the northeastern region of Brazil and has evolved into one of the country's most beloved dance forms. The name "forró" is believed to have derived from the English phrase "for all," referring to the inclusive nature of public dances organized by British railway companies for their workers in the early 20th century.
              </p>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                As a musical genre, forró encompasses various rhythms including baião, xote, and arrasta-pé. The traditional forró ensemble, known as trio nordestino, consists of an accordion (the primary instrument), a zabumba (a type of bass drum), and a metal triangle.
              </p>
              
              <h2 className="text-3xl font-display font-medium mb-6 mt-10 text-dance-brown">
                The Dance Style
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                Forró dance is characterized by its close embrace and rhythmic movements. Partners dance with their chests connected while their legs intertwine in various stepping patterns. The dance ranges from simple two-step movements to complex sequences involving spins, dips, and playful improvisations.
              </p>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                There are several styles of forró dancing, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-dance-black text-opacity-80">
                <li className="mb-2">
                  <strong>Forró pé-de-serra:</strong> The traditional style, characterized by simple steps and close embrace
                </li>
                <li className="mb-2">
                  <strong>Forró universitário:</strong> A modern, more elaborate style popular among university students
                </li>
                <li className="mb-2">
                  <strong>Forró eletrônico:</strong> Incorporates elements of other dance styles with electronic music influences
                </li>
              </ul>
              
              <h2 className="text-3xl font-display font-medium mb-6 mt-10 text-dance-brown">
                Cultural Significance
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                Forró is more than just a dance; it's a vital part of Brazilian cultural identity. The music often tells stories of rural life, love, and the struggles of the northeastern people. During June festivals (Festas Juninas), forró takes center stage as communities gather to celebrate with food, dance, and music.
              </p>
              
              <p className="text-dance-black text-opacity-80">
                Today, forró has spread internationally, with dedicated communities and festivals in Europe, North America, and beyond. Its accessible nature, joyful rhythm, and sense of community continue to attract new enthusiasts worldwide.
              </p>
            </div>
            
            <div className="md:col-span-1 space-y-8">
              <div className="bg-dance-cream bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-display font-medium mb-4 text-dance-brown">
                  Key Forró Figures
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Luiz Gonzaga</h4>
                    <p className="text-sm text-dance-black text-opacity-70">Known as the "King of Baião," he popularized forró music throughout Brazil</p>
                  </li>
                  <li>
                    <h4 className="font-medium">Dominguinhos</h4>
                    <p className="text-sm text-dance-black text-opacity-70">Renowned accordionist and composer who modernized the genre</p>
                  </li>
                  <li>
                    <h4 className="font-medium">Marinês</h4>
                    <p className="text-sm text-dance-black text-opacity-70">The "Queen of Forró," who brought female voices to the forefront</p>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Forró dancers" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-dance-brown text-white p-6 rounded-lg">
                <h3 className="text-xl font-display font-medium mb-4">
                  Want to Try Forró?
                </h3>
                <p className="mb-4 text-white text-opacity-90">
                  Join our weekly classes and experience the joy of forró dancing!
                </p>
                <a 
                  href="/events" 
                  className="block w-full bg-dance-orange hover:bg-dance-orange/90 text-center py-2 rounded transition-colors duration-300"
                >
                  See Our Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutForro;
