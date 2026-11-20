import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  background: "white" | "beige";
  children: ReactNode;
};

const backgroundClasses = {
  white: "bg-white",
  beige: "bg-forro-beige",
};

// A full-height home page section: brown title stripe followed by the content.
export default function Section({ id, title, background, children }: SectionProps) {
  return (
    <section id={id} className="flex min-h-screen scroll-mt-20 flex-col">
      <div className="bg-forro-brown px-4 pb-24 pt-20 text-center">
        <h2 className="mb-6 animate-fade-in text-3xl font-bold text-forro-orange md:text-5xl">{title}</h2>
      </div>
      <div className={`flex-grow py-12 ${backgroundClasses[background]}`}>
        <div className="container">{children}</div>
      </div>
    </section>
  );
}
