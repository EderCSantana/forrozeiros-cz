import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

// A list of collapsible items where at most one item is open at a time.
export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div key={item.id} className="rounded-lg bg-white shadow-sm">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex items-center justify-between rounded-t-lg px-6 py-4 font-medium"
              >
                <span className="text-lg font-medium text-forro-brown">{item.title}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              className={`grid text-sm transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-gray-700">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
