import { Building, Calendar, Gift, HandHeart, School, University } from "lucide-react";
import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

const eventTypes = [
  { key: "schools", icon: School },
  { key: "universities", icon: University },
  { key: "team_building", icon: Building },
  { key: "nonprofit_events", icon: HandHeart },
  { key: "nonprofit_projects", icon: Gift },
  { key: "public_events", icon: Calendar },
];

export default function CustomEvents() {
  const { t } = useLanguage();

  return (
    <Section id="custom-events" title={t("custom_events.title")} background="beige">
      <div className="mx-auto mb-10 max-w-3xl">
        <p className="mb-6 text-lg">{t("custom_events.intro")}</p>
        <p className="mb-6 text-xl font-medium text-forro-brown">{t("custom_events.help_intro")}</p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventTypes.map(({ key, icon: Icon }) => (
          <div key={key} className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex items-center">
              <Icon className="mr-3 text-forro-orange" size={28} />
              <h3 className="text-xl font-semibold text-forro-brown">{t(`custom_events.${key}_title`)}</h3>
            </div>
            <p>{t(`custom_events.${key}_content`)}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-forro-cream p-6">
        <p className="text-center italic">{t("custom_events.assistance")}</p>
      </div>
    </Section>
  );
}
