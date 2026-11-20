import { Flag, Music, Users } from "lucide-react";
import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

// Forró styles (about_forro.style_<n>_*) shown as accordions: two columns plus one centered item below.
const styleColumns = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const lastStyle = 9;

const musicInstruments = [1, 2, 3];

export default function AboutForro() {
  const { t } = useLanguage();

  const toAccordionItem = (number: number) => ({
    id: String(number),
    title: t(`about_forro.style_${number}_name`),
    content: t(`about_forro.style_${number}_desc`),
  });

  return (
    <Section id="about-forro" title={t("about_forro.title")} background="beige">
      <div className="mb-8 rounded-lg bg-white py-16 shadow-md">
        <div className="mx-auto max-w-4xl space-y-8 px-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Flag className="h-8 w-8 text-forro-brown" />
              <h2 className="font-display text-3xl font-medium text-forro-brown">{t("about_forro.origins_title")}</h2>
            </div>
            <div className="space-y-4 text-lg">
              <p className="text-gray-800">{t("about_forro.origins_p1")}</p>
              <div className="rounded-lg bg-forro-yellow/30 p-5">
                <ul className="list-disc space-y-2 pl-6 text-gray-800">
                  {t("about_forro.origins_p2")
                    .split("\n")
                    .map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-forro-brown" />
              <h2 className="font-display text-3xl font-medium text-forro-brown">
                {t("about_forro.dance_style_title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-forro-yellow/50 p-6">
                <h3 className="mb-4 font-display text-xl font-semibold text-forro-brown">{t("about_forro.the_dance")}</h3>
                <p className="text-gray-800">{t("about_forro.dance_style_p1")}</p>
              </div>
              <div className="rounded-lg bg-forro-yellow/50 p-6">
                <h3 className="mb-4 font-display text-xl font-semibold text-forro-brown">{t("about_forro.the_music")}</h3>
                <div className="space-y-3 text-gray-800">
                  <p>{t("about_forro.dance_style_p2")}</p>
                  <ul className="list-disc space-y-2 pl-6">
                    {musicInstruments.map((number) => (
                      <li key={number}>
                        <strong>{t(`about_forro.dance_style_list_${number}_name`)}</strong>{" "}
                        {t(`about_forro.dance_style_list_${number}_desc`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-forro-yellow/30 py-16 shadow-md">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 flex items-center gap-3">
            <Music className="h-8 w-8 text-forro-brown" />
            <h2 className="font-display text-3xl font-medium text-forro-brown">{t("about_forro.styles_title")}</h2>
          </div>
          <p className="mb-8 text-lg text-gray-800">{t("about_forro.styles_p1")}</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {styleColumns.map((column) => (
              <Accordion key={column[0]} items={column.map(toAccordionItem)} />
            ))}
          </div>
          <Accordion items={[toAccordionItem(lastStyle)]} className="mx-auto mt-8 max-w-xl" />
        </div>
      </div>
    </Section>
  );
}
