
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-orange text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Meet the passionate team behind DanceEvent
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-medium mb-6 text-dance-brown">
                Our Story
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                DanceEvent was born from a shared passion for Brazilian dance and culture. Founded in 2015 by a group of forró enthusiasts, our mission has been to create a vibrant community where people can experience the joy of Brazilian rhythms and forge meaningful connections through dance.
              </p>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                What started as small gatherings in local community centers has grown into a thriving organization that hosts regular classes, workshops, and events. We take pride in offering an authentic experience of forró and other Brazilian dance styles, taught by instructors with deep knowledge of both technique and cultural context.
              </p>
              
              <p className="text-dance-black text-opacity-80">
                Our community has welcomed dancers of all levels, from absolute beginners to advanced practitioners. We believe that dance is for everyone and strive to create an inclusive, supportive environment where people feel comfortable exploring movement and expressing themselves.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Dance group" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-dance-cream bg-opacity-30">
        <div className="container-fluid mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4 text-dance-brown">
              Meet Our Team
            </h2>
            <p className="text-dance-black text-opacity-80 max-w-2xl mx-auto">
              The passionate individuals who bring our events to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                alt="Maria Silva" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-medium mb-1 text-dance-black">
                  Maria Silva
                </h3>
                <p className="text-dance-orange mb-3">Founder & Artistic Director</p>
                <p className="text-dance-black text-opacity-80">
                  With over 15 years of experience dancing and teaching forró across Brazil and Europe, Maria brings authentic knowledge and passion to every class and event.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="João Oliveira" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-medium mb-1 text-dance-black">
                  João Oliveira
                </h3>
                <p className="text-dance-orange mb-3">Head Instructor</p>
                <p className="text-dance-black text-opacity-80">
                  Born in Recife, Brazil, João is a master of traditional forró styles. His teaching approach emphasizes musicality and connection between partners.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm transform transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Ana Martins" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-medium mb-1 text-dance-black">
                  Ana Martins
                </h3>
                <p className="text-dance-orange mb-3">Event Coordinator</p>
                <p className="text-dance-black text-opacity-80">
                  Ana's organizational skills and attention to detail ensure our events run smoothly. She's also an accomplished dancer specializing in forró universitário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4 text-dance-brown">
              Our Values
            </h2>
            <p className="text-dance-black text-opacity-80 max-w-2xl mx-auto">
              The principles that guide our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-dance-cream rounded-lg">
              <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                Authenticity
              </h3>
              <p className="text-dance-black text-opacity-80">
                We honor the cultural roots and traditions of forró while embracing its evolution and contemporary expressions.
              </p>
            </div>
            
            <div className="p-6 border border-dance-cream rounded-lg">
              <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                Inclusivity
              </h3>
              <p className="text-dance-black text-opacity-80">
                We create a welcoming space for people of all backgrounds, ages, and dance levels to participate and connect.
              </p>
            </div>
            
            <div className="p-6 border border-dance-cream rounded-lg">
              <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                Community
              </h3>
              <p className="text-dance-black text-opacity-80">
                We foster meaningful connections through shared experiences, collaborative learning, and mutual support.
              </p>
            </div>
            
            <div className="p-6 border border-dance-cream rounded-lg">
              <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
                Joy
              </h3>
              <p className="text-dance-black text-opacity-80">
                We celebrate the happiness that dance brings, creating events that leave participants feeling energized and uplifted.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h2 className="text-3xl font-display font-medium mb-4">
            Join Our Community
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Experience the joy of forró dancing with us. No previous experience required!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-dance-orange hover:bg-dance-orange/90 text-white py-3 px-8 rounded-md shadow-md transition-all duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
