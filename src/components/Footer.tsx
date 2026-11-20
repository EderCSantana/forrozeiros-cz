import { Facebook, Instagram, Mail } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import { contactEmail, navItems, socialLinks } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageContext";

const linkClasses = "transition-colors duration-300 hover:text-forro-amber";

// The footer lists every section except "home", split in two columns.
const footerNavItems = navItems.filter((item) => item.id !== "home");
const footerNavColumns = [footerNavItems.slice(0, 4), footerNavItems.slice(4)];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forro-brown px-4 text-white">
      <div className="grid grid-cols-1 gap-8 pb-10 pt-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="mb-4 font-display text-xl font-medium">Forrozeiros.cz</h3>
          <p className="mb-4 text-white/80">
            {t("footer.tagline")}
            <br />
            {t("footer.activities")}
          </p>
          <p className="italic text-white/80">{t("footer.made_by")}</p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-medium">{t("footer.quick_links")}</h3>
          <div className="grid grid-cols-2 gap-2">
            {footerNavColumns.map((column, index) => (
              <ul key={index} className="space-y-2 text-white/80">
                {column.map((item) => (
                  <li key={item.id}>
                    <a href={`/#${item.id}`} className={linkClasses}>
                      {t(item.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-medium">{t("footer.contact_us")}</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center">
              <Mail size={18} className="mr-3 flex-shrink-0" />
              <a href={`mailto:${contactEmail}`} className={linkClasses}>
                {contactEmail}
              </a>
            </li>
            <li className="flex items-center">
              <Facebook size={18} className="mr-3 flex-shrink-0" />
              <ExternalLink href={socialLinks.facebook} className={linkClasses}>
                Forrozeiros CZ
              </ExternalLink>
            </li>
            <li className="flex items-center">
              <Instagram size={18} className="mr-3 flex-shrink-0" />
              <ExternalLink href={socialLinks.instagram} className={linkClasses}>
                @forrozeiros_cz
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/60">
        <p>
          © {year} Forrozeiros.cz. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
