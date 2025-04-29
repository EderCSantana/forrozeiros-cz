
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
                  <p className="text-gray-800">
                    {t("about_forro.origins_p2")}
                  </p>
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
                      <p className="whitespace-pre-line">{t("about_forro.dance_style_p1")}</p>
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
                    <span className="text-lg font-medium text-dance-brown">Forró Pé de Serra</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      The most traditional form of forró. Played with the classic trio (accordion, zabumba, and triangle). 
                      Lyrics often talk about love, rural life, and nostalgia.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Key artists:</strong> Luiz Gonzaga, Jackson do Pandeiro, Dominguinhos.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="universitario" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Forró Universitário</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A modern version that became popular among young people. Uses additional instruments 
                      like bass, guitar, and flute.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Key artists:</strong> Falamansa, Bicho de Pé, Trio Virgulino.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="eletronico" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Forró Eletrônico</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      Uses electronic elements such as keyboards and electric guitar.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Key artists:</strong> Aviões do Forró, Wesley Safadão, Calcinha Preta.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="roots" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Forró Roots</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A revival of pé de serra with more improvisation and musical experimentation.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Key artists:</strong> Trio Alvorada, Quarteto Olinda, Os 3 do Nordeste.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pisadinha" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Pisadinha</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A modern, simplified version of forró with a strong electronic bass. Has a steady, 
                      repetitive beat, making it very danceable.
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Key artists:</strong> Barão da Pisadinha, Aldair Playboy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="risca-faca" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Risca-Faca</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A fast and aggressive style, often linked to street parties and intense dancing. 
                      Lyrics usually focus on jealousy, passion, and nightlife conflicts. Less common in 
                      mainstream forró but influential in regional dance scenes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rato" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Rato</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A playful, humorous subgenre of forró that often includes satirical lyrics, 
                      exaggerated instrumentation, and an experimental approach to rhythm and melody.
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
                <AccordionItem value="xote" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Xote</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      The slowest and most romantic style of forró. Danced in close embrace, with smooth, 
                      swaying movements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="baiao" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Baião</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      The original rhythm of forró, popularized by Luiz Gonzaga. Characterized by 
                      syncopated beats and bouncy footwork.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="arrasta-pe" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Arrasta-Pé</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A fast and lively dance, commonly seen at festa junina. Involves quick footwork 
                      and energetic spins.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="xaxado" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Xaxado</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      Originally a solo dance performed by cangaceiros (bandits of the Northeast). 
                      Now adapted into partner dancing, featuring sharp footwork.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rojao" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Rojão</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A very fast-paced style, similar to arrasta-pé but with even quicker steps. 
                      Requires high energy and stamina.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="pisadinha-dance" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Pisadinha</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A simplified and bouncy dance with fewer steps and a strong focus on hip movements. 
                      Often danced in a relaxed, free-flowing style.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="risca-faca-dance" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Risca-Faca</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      A highly energetic dance, often performed with dramatic spins and aggressive steps. 
                      Has a rebellious and intense feel, reflecting its roots in street dance culture.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="rato-dance" className="bg-white rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                    <span className="text-lg font-medium text-dance-brown">Rato</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-gray-700">
                      Known for its humorous, loose interpretation and exaggerated expressions. Often 
                      performed in informal, spontaneous settings with a focus on fun and playfulness.
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
