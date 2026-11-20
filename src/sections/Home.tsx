import CalendarEmbed from "@/components/CalendarEmbed";
import Carousel from "@/components/Carousel";
import { carouselImages } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section id="home" className="flex min-h-screen scroll-mt-20 flex-col">
      <Carousel images={carouselImages} />
      <div className="flex-grow bg-white pb-8 pt-16">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold text-forro-brown">{t("home.calendar.title")}</h2>
          <CalendarEmbed />
        </div>
      </div>
    </section>
  );
}
