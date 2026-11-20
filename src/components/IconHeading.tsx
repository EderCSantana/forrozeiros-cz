import type { LucideIcon } from "lucide-react";

type IconHeadingProps = {
  icon: LucideIcon;
  title: string;
  className?: string;
};

export default function IconHeading({ icon: Icon, title, className = "" }: IconHeadingProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Icon className="mr-4 text-forro-orange" size={24} />
      <h3 className="font-display text-2xl font-medium md:text-3xl">{title}</h3>
    </div>
  );
}
