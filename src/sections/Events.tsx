import type { ReactNode } from "react";
import { CalendarDays, Clock, FileText, MapPin, Music, PenSquare, Ticket, Users, type LucideIcon } from "lucide-react";
import CalendarEmbed from "@/components/CalendarEmbed";
import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

type EventBlockProps = {
  title: string;
  image?: string;
  imageOnLeft?: boolean;
  children: ReactNode;
};

function EventBlock({ title, image, imageOnLeft = false, children }: EventBlockProps) {
  return (
    <div className="py-8 first:pt-0">
      <h3 className="mb-6 font-display text-2xl font-bold text-forro-brown">{title}</h3>
      <div className={`flex flex-col items-start gap-6 ${imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="flex-1 space-y-4">{children}</div>
        {image && (
          <div className="w-full flex-shrink-0 overflow-hidden rounded-full border-4 border-forro-yellow shadow-lg md:w-1/3">
            <img src={image} alt={title} className="aspect-square w-full object-cover" />
          </div>
        )}
      </div>
      <hr className="mt-8" />
    </div>
  );
}

function IconLine({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <p className="flex items-center gap-2">
      <Icon size={18} className="text-forro-brown" /> {children}
    </p>
  );
}

export default function Events() {
  const { t } = useLanguage();

  return (
    <Section id="events" title={t("events.title")} background="white">
      <div className="space-y-8">
        <EventBlock title={t("events.weekly_prostor_title")} image="/images/event-prostor.png">
          <IconLine icon={Clock}>{t("events.weekly_when")}</IconLine>
          <IconLine icon={Users}>{t("events.weekly_format")}</IconLine>
          <p>{t("events.weekly_after")}</p>
          <p>{t("events.weekly_summer")}</p>
          <IconLine icon={FileText}>{t("events.weekly_rules")}</IconLine>
          <p>{t("events.weekly_contribution")}</p>
        </EventBlock>

        <EventBlock title={t("events.letna_title")} image="/images/event-letna.png" imageOnLeft>
          <IconLine icon={Clock}>{t("events.letna_when")}</IconLine>
          <IconLine icon={MapPin}>{t("events.letna_where")}</IconLine>
          <IconLine icon={CalendarDays}>{t("events.letna_schedule")}</IconLine>
          <IconLine icon={FileText}>{t("events.letna_rules")}</IconLine>
        </EventBlock>

        <EventBlock title={t("events.concerts_title")} image="/images/event-concerts.png">
          <IconLine icon={Music}>{t("events.concerts_description")}</IconLine>
          <IconLine icon={CalendarDays}>{t("events.concerts_schedule")}</IconLine>
          <IconLine icon={Ticket}>{t("events.concerts_entrance")}</IconLine>
          <IconLine icon={FileText}>{t("events.concerts_rules")}</IconLine>
        </EventBlock>

        <EventBlock title={t("events.seasonal_title")} image="/images/event-seasonal.png" imageOnLeft>
          <p>{t("events.seasonal_intro")}</p>
          <ul className="list-disc pl-5">
            <li>{t("events.seasonal_lusofona")}</li>
            <li>{t("events.seasonal_kinobrasil")}</li>
            <li>{t("events.seasonal_brazilfest")}</li>
            <li>{t("events.seasonal_festas")}</li>
          </ul>
          <p className="italic">{t("events.seasonal_note")}</p>
          <IconLine icon={FileText}>{t("events.seasonal_rules")}</IconLine>
        </EventBlock>

        <EventBlock title={t("events.nearby_title")} image="/images/event-nearby.png">
          <p>{t("events.nearby_intro")}</p>
          <ul className="list-disc pl-5">
            <li>{t("events.nearby_brno")}</li>
            <li>{t("events.nearby_dresden")}</li>
            <li>{t("events.nearby_budapest")}</li>
          </ul>
          <p>{t("events.nearby_check")}</p>
          <IconLine icon={FileText}>{t("events.nearby_rules")}</IconLine>
        </EventBlock>

        <EventBlock title={t("events.custom_events_title")}>
          <p>{t("events.custom_events_description")}</p>
          <p>{t("events.custom_events_private")}</p>
          <IconLine icon={FileText}>{t("events.custom_events_rules")}</IconLine>
          <div>
            <a
              href="/#custom-events"
              className="inline-flex items-center gap-2 rounded-md bg-forro-orange px-4 py-2 text-white transition-colors duration-300 hover:bg-forro-rust"
            >
              <PenSquare size={18} /> {t("events.custom_events_learn_more")}
            </a>
          </div>
        </EventBlock>
      </div>

      <div className="mt-8 py-8">
        <h3 className="mb-6 font-display text-2xl font-bold text-forro-brown">{t("events.upcoming")}</h3>
        <CalendarEmbed />
      </div>
    </Section>
  );
}
