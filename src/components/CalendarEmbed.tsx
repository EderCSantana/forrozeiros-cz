import { calendarUrl } from "@/data/site";

export default function CalendarEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-forro-amber shadow-lg">
      <iframe
        src={calendarUrl}
        title="Forró Events Calendar"
        scrolling="no"
        className="h-[400px] w-full bg-forro-beige sm:h-[500px] lg:h-[600px]"
      />
    </div>
  );
}
