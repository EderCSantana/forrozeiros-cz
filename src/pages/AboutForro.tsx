
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

const AboutForro = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-dance-brown text-white">
        <div className="container-fluid mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-fade-in">
            {t("about_forro.title")}
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {t("about_forro.subtitle")}
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-display font-medium mb-6 text-dance-brown">
                {t("about_forro.origins_title")}
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                {t("about_forro.origins_p1")}
              </p>
              
              <p className="mb-4 text-dance-black text-opacity-80">
                {t("about_forro.origins_p2")}
              </p>
              
              <h2 className="text-3xl font-display font-medium mb-6 mt-10 text-dance-brown">
                {t("about_forro.dance_style_title")}
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80 whitespace-pre-line">
                {t("about_forro.dance_style_p1")}
              </p>
              
              <p className="mb-4 text-dance-black text-opacity-80 whitespace-pre-line">
                {t("about_forro.dance_style_p2")}
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-dance-black text-opacity-80">
                <li className="mb-2">
                  <strong>{t("about_forro.dance_style_list_1_name")}</strong> {t("about_forro.dance_style_list_1_desc")}
                </li>
                <li className="mb-2">
                  <strong>{t("about_forro.dance_style_list_2_name")}</strong> {t("about_forro.dance_style_list_2_desc")}
                </li>
                <li className="mb-2">
                  <strong>{t("about_forro.dance_style_list_3_name")}</strong> {t("about_forro.dance_style_list_3_desc")}
                </li>
              </ul>
              
              <h2 className="text-3xl font-display font-medium mb-6 mt-10 text-dance-brown">
                {t("about_forro.cultural_title")}
              </h2>
              
              <p className="mb-4 text-dance-black text-opacity-80 whitespace-pre-line">
                {t("about_forro.cultural_p1")}
              </p>
              
              <p className="text-dance-black text-opacity-80 whitespace-pre-line">
                {t("about_forro.cultural_p2")}
              </p>
            </div>
            
            <div className="md:col-span-1 space-y-8">
              <div className="bg-dance-cream bg-opacity-30 p-6 rounded-lg">
                <h3 className="text-xl font-display font-medium mb-4 text-dance-brown">
                  {t("about_forro.key_figures")}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">{t("about_forro.key_figure_1_name")}</h4>
                    <p className="text-sm text-dance-black text-opacity-70">{t("about_forro.key_figure_1_desc")}</p>
                  </li>
                  <li>
                    <h4 className="font-medium">{t("about_forro.key_figure_2_name")}</h4>
                    <p className="text-sm text-dance-black text-opacity-70">{t("about_forro.key_figure_2_desc")}</p>
                  </li>
                  {t("about_forro.key_figure_3_name") && (
                    <li>
                      <h4 className="font-medium">{t("about_forro.key_figure_3_name")}</h4>
                      <p className="text-sm text-dance-black text-opacity-70">{t("about_forro.key_figure_3_desc")}</p>
                    </li>
                  )}
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
                  {t("about_forro.try_forro")}
                </h3>
                <p className="mb-4 text-white text-opacity-90">
                  {t("about_forro.try_forro_desc")}
                </p>
                <a 
                  href="/events" 
                  className="block w-full bg-dance-orange hover:bg-dance-orange/90 text-center py-2 rounded transition-colors duration-300"
                >
                  {t("about_forro.see_schedule")}
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
