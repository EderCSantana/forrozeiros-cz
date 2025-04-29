
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Music, Flag, Users } from "lucide-react";

const AboutForro = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-dance-beige">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            {t("about_forro.title")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in animation-delay-200">
            {t("about_forro.subtitle")}
          </p>
        </div>
        
        {/* Decorative bunting flags */}
        <div className="bunting-flags absolute top-0 left-0 right-0">
          <div className="bunting-container flex justify-center">
            {[...Array(12)].map((_, i) => {
              const colors = ["bg-dance-flag-red", "bg-dance-flag-blue", "bg-dance-flag-green", "bg-dance-flag-orange"];
              return (
                <div 
                  key={i}
                  className={`flag ${colors[i % colors.length]} animate-flag-wave`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              );
            })}
          </div>
        </div>
      </section>
      
      {/* What is Forró Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Flag className="h-8 w-8 text-dance-brown" />
                  <h2 className="text-3xl font-display font-medium text-dance-brown">
                    {t("about_forro.origins_title")}
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg">
                  <p className="text-gray-800">
                    {t("about_forro.origins_p1")}
                  </p>
                  <div className="bg-dance-yellow/30 p-5 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2 text-gray-800">
                      {t("about_forro.origins_p2").split("\n").map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-dance-brown" />
                  <h2 className="text-3xl font-display font-medium text-dance-brown">
                    {t("about_forro.dance_style_title")}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-dance-yellow/50 p-6 rounded-lg forro-border">
                    <h3 className="text-xl font-display font-semibold mb-4 text-dance-brown">
                      The Dance
                    </h3>
                    <div className="space-y-3 text-gray-800">
                      <p>{t("about_forro.dance_style_p1")}</p>
                    </div>
                  </div>
                  
                  <div className="bg-dance-yellow/50 p-6 rounded-lg forro-border">
                    <h3 className="text-xl font-display font-semibold mb-4 text-dance-brown">
                      The Music
                    </h3>
                    <div className="space-y-3 text-gray-800">
                      <p>{t("about_forro.dance_style_p2")}</p>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>{t("about_forro.dance_style_list_1_name")}</strong> {t("about_forro.dance_style_list_1_desc")}
                        </li>
                        <li>
                          <strong>{t("about_forro.dance_style_list_2_name")}</strong> {t("about_forro.dance_style_list_2_desc")}
                        </li>
                        <li>
                          <strong>{t("about_forro.dance_style_list_3_name")}</strong> {t("about_forro.dance_style_list_3_desc")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Forró dancers" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-dance-brown text-white p-6 rounded-lg">
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {t("about_forro.try_forro")}
                  </h3>
                  <p className="mb-6 text-white text-opacity-90">
                    {t("about_forro.try_forro_desc")}
                  </p>
                  <a 
                    href="/events" 
                    className="block w-full bg-dance-orange hover:bg-dance-orange/90 text-white text-center py-3 px-4 rounded-md transition-colors duration-300 font-medium"
                  >
                    {t("about_forro.see_schedule")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Forró Styles Section */}
      <section className="py-16 bg-dance-yellow/30">
        <div className="container-fluid mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Music className="h-8 w-8 text-dance-brown" />
            <h2 className="text-3xl font-display font-medium text-dance-brown">
              {t("about_forro.cultural_title")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-dance-brown">
                Musical Styles of Forró
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="pe-de-serra" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Pé de Serra</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      This style stays true to traditional roots, characterized by its acoustic instrumentation and strong rhythms. 
                      Songs often tell stories of rural life and Brazilian folklore.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="universitario" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Forró Universitário</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A modern interpretation that became popular in university settings, blending traditional elements 
                      with contemporary influences, and often featuring a more diverse range of instruments and arrangements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eletronico" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Forró Eletrônico</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      Emerged in the 1990s, incorporating electronic instruments and beats, making it more accessible to 
                      younger audiences. It retains the essence of traditional Forró while aiming for broader appeal in 
                      urban settings.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rojao" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Rojão</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A lively and upbeat rhythm that emphasizes a strong, clear beat, often used in dances 
                      that involve quick footwork and energetic movements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-dance-brown">
                Dance Styles of Forró
              </h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="xaxado" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Xaxado</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      This dance includes distinct hip movements and emphasizes rhythm, often associated with the cangaço 
                      (bandit culture) where men and women dance proudly, showcasing their strength and elegance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="arrasta-pe" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Arrasta-Pé</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A festive dance style celebrated during forró parties, characterized by a mix of rhythmic footwork 
                      and lively partner interactions, creating an upbeat and communal atmosphere.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="xote" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Xote</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A slower dance rhythm that allows for a more romantic and relaxed style. It is often danced 
                      in a close hold and typically features a gentle, flowing motion.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="baiao" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Baião</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A hallmark rhythm of Forró, marked by syncopation and a lively tempo. It often includes 
                      call-and-response vocals, intensifying the interaction between dancers and musicians.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="coco" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Coco</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      While traditionally separate from Forró, Coco is often blended into Forró music, characterized by 
                      its upbeat tempo and percussive elements, making it suitable for dance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/events" 
              className="forro-button inline-flex items-center gap-2"
            >
              {t("about_forro.see_schedule")}
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutForro;
