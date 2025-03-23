
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-yellow text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            We'd love to hear from you! Reach out with questions or to join our community
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-medium mb-8 text-dance-brown">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-dance-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Our Location</h3>
                    <p className="text-dance-black text-opacity-80">
                      123 Dance Street<br />
                      Rhythm City, RC 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-dance-blue bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-dance-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Email Us</h3>
                    <p className="text-dance-black text-opacity-80">
                      <a href="mailto:info@danceevent.com" className="hover:text-dance-orange transition-colors">
                        info@danceevent.com
                      </a>
                    </p>
                    <p className="text-dance-black text-opacity-80">
                      <a href="mailto:events@danceevent.com" className="hover:text-dance-orange transition-colors">
                        events@danceevent.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-dance-green bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-dance-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-black">Call Us</h3>
                    <p className="text-dance-black text-opacity-80">
                      <a href="tel:+1234567890" className="hover:text-dance-orange transition-colors">
                        +1 (234) 567-890
                      </a>
                    </p>
                    <p className="text-sm text-dance-black text-opacity-60 mt-1">
                      Monday-Friday: 9am-5pm
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-display font-medium mb-4 text-dance-brown">
                  Follow Us
                </h3>
                <p className="text-dance-black text-opacity-80 mb-4">
                  Stay connected with us on social media for the latest updates and event announcements.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-dance-brown bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-brown">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 bg-dance-orange bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dance-orange">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-dance-cream">
              <h2 className="text-2xl font-display font-medium mb-6 text-dance-brown">
                Send Us a Message
              </h2>
              
              {formSubmitted ? (
                <div className="bg-dance-green bg-opacity-10 text-dance-green p-4 rounded-lg flex items-start">
                  <CheckCircle className="mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Thank you!</h3>
                    <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dance-black mb-1">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-dance-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dance-orange focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dance-black mb-1">
                        Your Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-dance-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dance-orange focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-dance-black mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-dance-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dance-orange focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Event Information">Event Information</option>
                      <option value="Class Registration">Class Registration</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-dance-black mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-dance-cream rounded-md focus:outline-none focus:ring-2 focus:ring-dance-orange focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-dance-brown hover:bg-dance-brown/90 text-white py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-dance-cream bg-opacity-30">
        <div className="container-fluid mx-auto">
          <h2 className="text-3xl font-display font-medium mb-8 text-dance-brown text-center">
            Find Us
          </h2>
          
          <div className="rounded-lg overflow-hidden shadow-md h-96 border border-dance-cream">
            {/* Here you would normally embed a map using Google Maps, Mapbox, etc. 
                For this example, we'll use a placeholder */}
            <div className="w-full h-full bg-dance-cream bg-opacity-50 flex items-center justify-center">
              <p className="text-dance-brown text-opacity-80">Map Placeholder - Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
