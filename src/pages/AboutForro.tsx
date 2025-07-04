
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Music, Flag, Users } from "lucide-react";

const AboutForro = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <TitleStripe title={t("about_forro.title")} />
      
      <main className="flex-grow py-12 bg-dance-beige">
        <div className="container mx-auto px-4">
          {/* What is Forró Section */}
          <section className="py-16 bg-white rounded-lg shadow-md mb-8">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
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
            </div>
          </section>
          
          {/* Forró Styles Section */}
          <section className="py-16 bg-dance-yellow/30 rounded-lg shadow-md">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-10">
                <Music className="h-8 w-8 text-dance-brown" />
                <h2 className="text-3xl font-display font-medium text-dance-brown">
                  {t("about_forro.styles_title")}
                </h2>
              </div>
              
              <p className="text-lg text-gray-800 mb-8">
                {t("about_forro.styles_p1")}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="pe-de-serra" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_1_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_1_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="universitario" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_2_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_2_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="eletronico" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_3_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_3_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="rojao" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_4_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_4_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="xaxado" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_5_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_5_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="arrasta-pe" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_6_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_6_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="xote" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_7_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_7_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="baiao" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_8_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_8_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mt-8">
                <Accordion type="single" collapsible className="space-y-4 max-w-xl mx-auto">
                  <AccordionItem value="coco" className="bg-white rounded-lg shadow-sm border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline rounded-t-lg">
                      <span className="text-lg font-medium text-dance-brown">{t("about_forro.style_9_name")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-gray-700">
                        {t("about_forro.style_9_desc")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutForro;
