import type { ReactNode } from "react";
import { Building, Globe, GraduationCap, Music, User, type LucideIcon } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import IconHeading from "@/components/IconHeading";
import Section from "@/components/Section";
import { useLanguage } from "@/i18n/LanguageContext";

// When `href` is omitted, the translated text is itself the URL.
type SocialLink = {
  label: string;
  href?: string;
  textKey: string;
};

type Partner = {
  key: string;
  logo?: string;
  banner?: string;
  hasAddress?: boolean;
  links: SocialLink[];
};

type Teacher = {
  key: string;
  photo?: string;
  links: SocialLink[];
};

const venues: Partner[] = [
  {
    key: "partners.venues.kps",
    logo: "/images/partner-kps.png",
    banner: "/images/partner-kps.png",
    hasAddress: true,
    links: [
      { label: "Facebook", href: "https://facebook.com/kpsmichov", textKey: "partners.venues.kps.facebook" },
      { label: "Instagram", href: "https://instagram.com/komunitniprostorsmichov", textKey: "partners.venues.kps.instagram" },
    ],
  },
  {
    key: "partners.venues.dorado",
    logo: "/images/partner-dorado.png",
    hasAddress: true,
    links: [
      { label: "Facebook", href: "https://facebook.com/doradocoffee.cz", textKey: "partners.venues.dorado.facebook" },
      { label: "Instagram", href: "https://instagram.com/doradocoffee.cz", textKey: "partners.venues.dorado.instagram" },
    ],
  },
];

const band: Partner = {
  key: "partners.band.tres_coracoes",
  logo: "/images/partner-tres-coracoes.png",
  links: [
    { label: "Facebook", href: "https://facebook.com/grupo.tres.coracoes.2025", textKey: "partners.band.tres_coracoes.facebook" },
    { label: "Instagram", href: "https://instagram.com/grupo_trescoracoes", textKey: "partners.band.tres_coracoes.instagram" },
  ],
};

const bandMemberLinks: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com/devanil.santos", textKey: "partners.band.devail.facebook" },
  { label: "Instagram", href: "https://instagram.com/devanilsantossamek", textKey: "partners.band.devail.instagram" },
];

const otherPartners: Partner[] = [
  {
    key: "partners.others.camoes",
    links: [
      { label: "Facebook", href: "https://facebook.com/institutocamoespraga", textKey: "partners.others.camoes.facebook" },
      { label: "Instagram", href: "https://instagram.com/instituto_camoes_praga", textKey: "partners.others.camoes.instagram" },
    ],
  },
];

const emilsonLinks: SocialLink[] = [
  { label: "Website", textKey: "partners.teachers.emilson.website" },
  { label: "Facebook", href: "https://facebook.com/emilson.bernardes", textKey: "partners.teachers.emilson.facebook" },
  { label: "Instagram", href: "https://instagram.com/emilson_bernardes", textKey: "partners.teachers.emilson.instagram" },
];

const zuzanaOlgaLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/", textKey: "partners.teachers.zuzana_olga.instagram" },
];

const otherTeachers: Teacher[] = [
  {
    key: "partners.teachers.carlos_fernanda",
    photo: "/images/teacher-carlos-fernanda.png",
    links: [
      { label: "Instagram", href: "https://instagram.com/carlosandfernanda", textKey: "partners.teachers.carlos_fernanda.instagram" },
      { label: "Facebook", href: "https://facebook.com/CarlosAndFernana", textKey: "partners.teachers.carlos_fernanda.facebook" },
      { label: "Website", href: "https://www.carlosfernanda.com/", textKey: "partners.teachers.carlos_fernanda.website" },
    ],
  },
  {
    key: "partners.teachers.andre",
    photo: "/images/teacher-andre.png",
    links: [
      { label: "Instagram", href: "https://instagram.com/andrenegrao_official", textKey: "partners.teachers.andre.instagram" },
      { label: "Facebook", href: "https://facebook.com/andre.negraoii.5", textKey: "partners.teachers.andre.facebook" },
    ],
  },
];

function PartnerGroup({ title, icon, children }: { title: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="mb-16">
      <IconHeading icon={icon} title={title} className="mb-6" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{children}</div>
    </div>
  );
}

function Card({ header, children, footer }: { header: ReactNode; children: ReactNode; footer: ReactNode }) {
  return (
    <div className="rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-6">{header}</div>
      <div className="px-6 pb-6">{children}</div>
      <div className="flex items-center px-6 pb-6">{footer}</div>
    </div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold tracking-tight text-forro-brown">{children}</h3>;
}

function LinkList({ links, className = "" }: { links: SocialLink[]; className?: string }) {
  const { t } = useLanguage();
  return (
    <div className={`grid gap-1 ${className}`}>
      {links.map((link) => (
        <div key={link.textKey}>
          {link.label}:{" "}
          <ExternalLink href={link.href ?? t(link.textKey)} className="text-forro-orange hover:underline">
            {t(link.textKey)}
          </ExternalLink>
        </div>
      ))}
    </div>
  );
}

function HtmlText({ html, className }: { html: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function PartnerCard({ partner, children }: { partner: Partner; children?: ReactNode }) {
  const { t } = useLanguage();
  const title = t(`${partner.key}.title`);

  return (
    <Card
      header={
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {partner.logo && (
            <div className="h-16 w-16 overflow-hidden rounded-full bg-white">
              <img src={partner.logo} alt={title} className="h-full w-full object-cover" />
            </div>
          )}
        </div>
      }
      footer={
        <ExternalLink
          href={t(`${partner.key}.website`)}
          className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-forro-orange px-4 py-2 text-sm font-medium text-slate-50 transition-colors hover:bg-forro-amber/90"
        >
          {t("partners.visit_website")}
        </ExternalLink>
      }
    >
      {partner.banner && (
        <div className="mb-4 h-48 w-full overflow-hidden rounded-md">
          <img src={partner.banner} alt={title} className="h-full w-full object-cover" />
        </div>
      )}
      <HtmlText html={t(`${partner.key}.description`)} className="mb-4" />
      <hr className="my-4" />
      <div className="text-sm">
        <div className="grid gap-1">
          {partner.hasAddress && <div>{t(`${partner.key}.address`)}</div>}
          <LinkList links={partner.links} />
        </div>
        {children}
      </div>
    </Card>
  );
}

function TeacherCard({ name, photo, links, children }: { name: string; photo?: string; links: SocialLink[]; children: ReactNode }) {
  return (
    <Card
      header={
        <div className="flex items-center gap-4">
          {photo ? (
            <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100">
              <img src={photo} alt={name} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-forro-cream">
              <User className="text-forro-brown" size={32} />
            </div>
          )}
          <CardTitle>{name}</CardTitle>
        </div>
      }
      footer={<LinkList links={links} className="w-full text-sm" />}
    >
      {children}
    </Card>
  );
}

export default function Partners() {
  const { t } = useLanguage();

  return (
    <Section id="partners" title={t("partners.title")} background="white">
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-medium text-forro-brown md:text-2xl">{t("partners.intro")}</h2>
        <p>{t("partners.intro.description")}</p>
      </div>

      <PartnerGroup title={t("partners.venues")} icon={Building}>
        {venues.map((venue) => (
          <PartnerCard key={venue.key} partner={venue} />
        ))}
      </PartnerGroup>

      <PartnerGroup title={t("partners.teachers")} icon={GraduationCap}>
        <TeacherCard name={t("partners.teachers.emilson.name")} photo="/images/teacher-emilson.png" links={emilsonLinks}>
          <p className="mb-2">
            <strong>{t("partners.teachers.emilson.title")}</strong>
          </p>
          <HtmlText html={t("partners.teachers.emilson.description")} />
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>{t("partners.teachers.emilson.specialization")}</strong>
            </li>
            <li>
              <strong>{t("partners.teachers.emilson.experience")}</strong>
            </li>
            <li>
              <strong>{t("partners.teachers.emilson.achievement")}</strong>
            </li>
          </ul>
        </TeacherCard>

        <TeacherCard name={t("partners.teachers.zuzana_olga.name")} links={zuzanaOlgaLinks}>
          <HtmlText html={t("partners.teachers.zuzana_olga.description")} />
        </TeacherCard>

        <div className="mt-6 md:col-span-2">
          <h4 className="mb-3 text-lg font-medium text-forro-brown">{t("partners.teachers.others.title")}</h4>
          <p className="mb-4">{t("partners.teachers.others.description")}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherTeachers.map((teacher) => (
              <div key={teacher.key} className="rounded-lg bg-forro-cream p-4">
                <div className="mb-2 flex items-center gap-3">
                  <img src={teacher.photo} alt={t(`${teacher.key}.name`)} className="h-10 w-10 shrink-0 rounded-full" />
                  <h5 className="font-medium text-forro-brown">{t(`${teacher.key}.name`)}</h5>
                </div>
                <LinkList links={teacher.links} className="text-sm" />
              </div>
            ))}
          </div>
        </div>
      </PartnerGroup>

      <PartnerGroup title={t("partners.local_band")} icon={Music}>
        <PartnerCard partner={band}>
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <img
                src="/images/musician-devanil.png"
                alt={t("partners.band.devail.name")}
                className="h-8 w-8 shrink-0 rounded-full"
              />
              <h5 className="font-medium">{t("partners.band.devail.name")}</h5>
            </div>
            <LinkList links={bandMemberLinks} className="mt-1" />
          </div>
        </PartnerCard>
      </PartnerGroup>

      <PartnerGroup title={t("partners.others")} icon={Globe}>
        {otherPartners.map((partner) => (
          <PartnerCard key={partner.key} partner={partner} />
        ))}
      </PartnerGroup>
    </Section>
  );
}
