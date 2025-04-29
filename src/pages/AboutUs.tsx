
import { PartyPopper, Music, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TitleStripe from "../components/TitleStripe";

// Forró logo component
const ForroLogo = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="text-dance-green forro-logo text-3xl relative">
        <span className="block">FO</span>
        <span className="block">R</span>
        <span className="block text-dance-orange">Z</span>
        <span className="block">EI</span>
        <span className="block">ROS</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dance-beige">
      <Header />
      
      {/* Hero Section with Title Stripe */}
      <TitleStripe title="ABOUT US" />
      
      {/* Our Story */}
      <section className="py-16 bg-dance-beige">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-dance-brown forro-heading">
                Our Story
              </h2>
              
              <p className="mb-4 text-dance-brown text-opacity-90">
                DanceEvent was born from a shared passion for Brazilian dance and culture. Founded in 2015 by a group of forró enthusiasts, our mission has been to create a vibrant community where people can experience the joy of Brazilian rhythms and forge meaningful connections through dance.
              </p>
              
              <p className="mb-4 text-dance-brown text-opacity-90">
                What started as small gatherings in local community centers has grown into a thriving organization that hosts regular classes, workshops, and events. We take pride in offering an authentic experience of forró and other Brazilian dance styles, taught by instructors with deep knowledge of both technique and cultural context.
              </p>
              
              <p className="text-dance-brown text-opacity-90">
                Our community has welcomed dancers of all levels, from absolute beginners to advanced practitioners. We believe that dance is for everyone and strive to create an inclusive, supportive environment where people feel comfortable exploring movement and expressing themselves.
              </p>
            </div>
            
            <div className="forro-border p-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Dance group" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Decorative Logo */}
      <div className="py-8 bg-dance-yellow bg-opacity-30">
        <ForroLogo />
      </div>
      
      {/* Our Team */}
      <section className="py-16 bg-dance-beige relative">
        <div className="container-fluid mx-auto">
          <div className="text-center mb-12 pt-4">
            <h2 className="text-4xl font-bold mb-4 text-dance-brown forro-heading">
              Meet Our Team
            </h2>
            <p className="text-dance-brown text-opacity-90 max-w-2xl mx-auto">
              The passionate individuals who bring our events to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="forro-border p-2 bg-dance-yellow">
              <div className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                  alt="Maria Silva" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-dance-brown">
                    Maria Silva
                  </h3>
                  <p className="text-dance-orange mb-3 font-bold">Founder & Artistic Director</p>
                  <p className="text-dance-brown text-opacity-80">
                    With over 15 years of experience dancing and teaching forró across Brazil and Europe, Maria brings authentic knowledge and passion to every class and event.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="forro-border p-2 bg-dance-yellow">
              <div className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="João Oliveira" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-dance-brown">
                    João Oliveira
                  </h3>
                  <p className="text-dance-orange mb-3 font-bold">Head Instructor</p>
                  <p className="text-dance-brown text-opacity-80">
                    Born in Recife, Brazil, João is a master of traditional forró styles. His teaching approach emphasizes musicality and connection between partners.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="forro-border p-2 bg-dance-yellow">
              <div className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Ana Martins" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-dance-brown">
                    Ana Martins
                  </h3>
                  <p className="text-dance-orange mb-3 font-bold">Event Coordinator</p>
                  <p className="text-dance-brown text-opacity-80">
                    Ana's organizational skills and attention to detail ensure our events run smoothly. She's also an accomplished dancer specializing in forró universitário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-dance-beige">
        <div className="container-fluid mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-dance-brown forro-heading">
              Our Values
            </h2>
            <p className="text-dance-brown text-opacity-90 max-w-2xl mx-auto">
              The principles that guide our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="forro-border p-6 bg-dance-yellow">
              <h3 className="text-xl font-bold mb-3 text-dance-green">
                Authenticity
              </h3>
              <p className="text-dance-brown text-opacity-90">
                We honor the cultural roots and traditions of forró while embracing its evolution and contemporary expressions.
              </p>
            </div>
            
            <div className="forro-border p-6 bg-dance-yellow">
              <h3 className="text-xl font-bold mb-3 text-dance-green">
                Inclusivity
              </h3>
              <p className="text-dance-brown text-opacity-90">
                We create a welcoming space for people of all backgrounds, ages, and dance levels to participate and connect.
              </p>
            </div>
            
            <div className="forro-border p-6 bg-dance-yellow">
              <h3 className="text-xl font-bold mb-3 text-dance-green">
                Community
              </h3>
              <p className="text-dance-brown text-opacity-90">
                We foster meaningful connections through shared experiences, collaborative learning, and mutual support.
              </p>
            </div>
            
            <div className="forro-border p-6 bg-dance-yellow">
              <h3 className="text-xl font-bold mb-3 text-dance-green">
                Joy
              </h3>
              <p className="text-dance-brown text-opacity-90">
                We celebrate the happiness that dance brings, creating events that leave participants feeling energized and uplifted.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-dance-brown text-white relative">
        <div className="container-fluid mx-auto text-center pt-8">
          <h2 className="text-4xl font-bold mb-4 text-dance-beige">
            Join Our Community
          </h2>
          <p className="text-dance-beige text-opacity-90 max-w-2xl mx-auto mb-8">
            Experience the joy of forró dancing with us. No previous experience required!
          </p>
          <a 
            href="/contact" 
            className="forro-button"
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
