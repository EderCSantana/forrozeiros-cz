import { Facebook, Instagram } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";
import { socialLinks } from "@/data/site";

const linkClasses = "text-forro-brown transition-colors duration-300 hover:text-forro-amber";

export default function SocialIcons({ size }: { size: number }) {
  return (
    <>
      <ExternalLink href={socialLinks.facebook} ariaLabel="Facebook" className={linkClasses}>
        <Facebook size={size} />
      </ExternalLink>
      <ExternalLink href={socialLinks.instagram} ariaLabel="Instagram" className={linkClasses}>
        <Instagram size={size} />
      </ExternalLink>
    </>
  );
}
