
import Header from "../components/Header";
import Footer from "../components/Footer";

const Rules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-red text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Our Rules
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Guidelines to ensure a safe, respectful, and enjoyable experience for everyone
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-display font-medium mb-4 text-dance-brown">
                Community Guidelines
              </h2>
              <p className="text-dance-black text-opacity-80 mb-6">
                At DanceEvent, we foster a community based on respect, inclusivity, and shared joy of dance. 
                Our guidelines help maintain a positive environment where everyone feels welcome and safe.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    Respect and Consent
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>Always ask before dancing with someone and respect their decision if they decline.</li>
                    <li>Maintain appropriate physical contact during dances. If you're unsure about a move or hold, ask first.</li>
                    <li>Listen to your partner's feedback and adjust accordingly.</li>
                    <li>Anyone can end a dance at any time without explanation.</li>
                    <li>Report any uncomfortable situations to our staff immediately.</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    Floor Etiquette
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>Be aware of your surroundings and other dancers on the floor.</li>
                    <li>Adapt your movements to the available space—save larger movements for when the floor is less crowded.</li>
                    <li>Follow the general counter-clockwise flow of the dance floor when applicable.</li>
                    <li>If a collision occurs, check that everyone is okay and apologize before continuing.</li>
                    <li>In crowded conditions, prioritize safety over elaborate movements.</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    Inclusivity
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>We welcome dancers of all backgrounds, identities, ages, and skill levels.</li>
                    <li>Experienced dancers are encouraged to dance with beginners and provide supportive guidance.</li>
                    <li>Discriminatory language or behavior of any kind will not be tolerated.</li>
                    <li>We encourage role-switching and learning both lead and follow positions.</li>
                    <li>Be patient and supportive of those who are learning.</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    Personal Hygiene and Attire
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>Come to events freshly showered and wearing deodorant.</li>
                    <li>Bring a change of clothes or extra shirts if you tend to perspire heavily.</li>
                    <li>Wear comfortable, clean clothing appropriate for movement.</li>
                    <li>Choose footwear that won't damage the dance floor (avoid street shoes with dirt or rubber soles that may mark the floor).</li>
                    <li>Consider bringing a hand towel for personal use.</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-dance-cream rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                    General Conduct
                  </h3>
                  <ul className="list-disc pl-6 text-dance-black text-opacity-80 space-y-2">
                    <li>Arrive on time for classes and respect the instructor's guidance.</li>
                    <li>Excessive alcohol consumption is discouraged—please drink responsibly.</li>
                    <li>Photography and video at events should be consensual. Ask before taking pictures of others.</li>
                    <li>Support the event by paying the appropriate entry fees.</li>
                    <li>Help build our community by welcoming newcomers and creating a positive atmosphere.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-display font-medium mb-4 text-dance-brown">
                Consequences for Rule Violations
              </h2>
              <p className="text-dance-black text-opacity-80 mb-6">
                We take these guidelines seriously to ensure everyone's safety and enjoyment. 
                Violations will be addressed as follows:
              </p>
              
              <div className="space-y-4">
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">First Occurrence:</h3>
                  <p className="text-dance-black text-opacity-80">
                    A verbal reminder about our community guidelines.
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">Second Occurrence:</h3>
                  <p className="text-dance-black text-opacity-80">
                    A formal warning and potential temporary removal from the current event.
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">Serious or Repeated Violations:</h3>
                  <p className="text-dance-black text-opacity-80">
                    Suspension from future events or permanent exclusion from our community.
                  </p>
                </div>
                
                <div className="bg-dance-cream bg-opacity-30 p-5 rounded-lg">
                  <h3 className="font-medium mb-2">Immediate Ejection:</h3>
                  <p className="text-dance-black text-opacity-80">
                    Severe violations such as harassment, threatening behavior, or endangering others will result in immediate removal with no refund.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-dance-brown text-white rounded-lg">
                <h3 className="text-xl font-display font-medium mb-4">
                  Reporting Concerns
                </h3>
                <p className="text-white text-opacity-90 mb-4">
                  If you experience or witness behavior that violates these guidelines, please report it immediately to any staff member or event organizer. You can also contact us directly at:
                </p>
                <ul className="space-y-2 text-white text-opacity-90">
                  <li>Email: safety@danceevent.com</li>
                  <li>Phone: (123) 456-7890</li>
                </ul>
                <p className="mt-4 text-white text-opacity-90">
                  All reports will be handled confidentially, and appropriate action will be taken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rules;
