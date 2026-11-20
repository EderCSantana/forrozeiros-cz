import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

const storyParagraphs = ["about_us.story_p1", "about_us.story_p2", "about_us.story_p3"];

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <Section id="about-us" title={t("about_us.title")} background="beige">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-forro-brown">{t("about_us.story_title")}</h2>
        <div className="space-y-6 text-gray-700">
          {storyParagraphs.map((key) => (
            <p key={key} className="leading-relaxed">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
