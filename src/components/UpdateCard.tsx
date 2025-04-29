
import { CalendarDays } from "lucide-react";

interface UpdateCardProps {
  title: string;
  date: string;
  content: string;
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

const UpdateCard = ({
  title,
  date,
  content,
  tags = [],
  imageUrl,
  imageAlt,
}: UpdateCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-dance-cream overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-dance-brown mb-3">
          <CalendarDays size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-display font-medium mb-3 text-dance-black">
          {title}
        </h3>
        <p className="text-dance-black text-opacity-80 mb-4">{content}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-xs rounded-full bg-dance-cream text-dance-brown"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateCard;
