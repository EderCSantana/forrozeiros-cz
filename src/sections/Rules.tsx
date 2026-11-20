import { BookOpen, Coffee, Users } from "lucide-react";
import IconHeading from "@/components/IconHeading";
import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

// Each group renders the keys <itemPrefix>.item1 ... <itemPrefix>.item<itemCount>.
const ruleGroups = [
  {
    titleKey: "rules.general_rules",
    descriptionKey: "rules.general_description",
    icon: Users,
    itemPrefix: "rules.general",
    itemCount: 8,
  },
  { titleKey: "rules.prostor_rules", icon: Coffee, itemPrefix: "rules.prostor", itemCount: 4 },
  { titleKey: "rules.recommendations", icon: BookOpen, itemPrefix: "rules.recommendations", itemCount: 6 },
];

export default function Rules() {
  const { t } = useLanguage();

  return (
    <Section id="rules" title={t("rules.title")} background="white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-xl font-medium text-forro-brown md:text-2xl">{t("rules.subtitle")}</h2>

        {ruleGroups.map((group) => (
          <div key={group.titleKey} className="mb-16">
            <IconHeading icon={group.icon} title={t(group.titleKey)} className="mb-4" />
            {group.descriptionKey && <p className="mb-6">{t(group.descriptionKey)}</p>}
            <ul className="list-disc space-y-3 pl-6">
              {Array.from({ length: group.itemCount }, (_, index) => (
                <li key={index}>{t(`${group.itemPrefix}.item${index + 1}`)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
