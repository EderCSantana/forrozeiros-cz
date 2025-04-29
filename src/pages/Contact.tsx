import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Send, CheckCircle, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useLanguage();

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
    
    // In a real implementation, you would send an email to forrozeiroscz@gmail.com
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <TitleStripe title={t("contact.title") || "CONTACT US"} />
      
      {/* Contact Info & Form Section */}
      <section className="py-16 bg-dance-beige">
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
                    <Mail className="text-dance-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-dance-brown">Email Us</h3>
                    <p className="text-dance-brown text-opacity-80">
                      <a href="mailto:forrozeiroscz@gmail.com" className="hover:text-dance-orange transition-colors">
                        forrozeiroscz@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-display font-medium mb-4 text-dance-brown">
                  Follow Us
                </h3>
                <p className="text-dance-brown text-opacity-80 mb-4">
                  Stay connected with us on social media for the latest updates and event announcements.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571664788308" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-dance-brown hover:text-dance-orange transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-dance-brown bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center mr-2 transition-colors duration-300">
                      <Facebook size={20} />
                    </div>
                    <span>Forrozeiros CZ</span>
                  </a>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://www.instagram.com/forrozeiros_cz/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-dance-brown hover:text-dance-orange transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-dance-orange bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center mr-2 transition-colors duration-300">
                      <Instagram size={20} />
                    </div>
                    <span>@forrozeiros_cz</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="forro-border p-8 bg-dance-yellow">
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
                      <label htmlFor="name" className="block text-sm font-medium text-dance-brown mb-1">
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
                      <label htmlFor="email" className="block text-sm font-medium text-dance-brown mb-1">
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
                    <label htmlFor="subject" className="block text-sm font-medium text-dance-brown mb-1">
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
                    <label htmlFor="message" className="block text-sm font-medium text-dance-brown mb-1">
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
      
      <Footer />
    </div>
  );
};

export default Contact;
