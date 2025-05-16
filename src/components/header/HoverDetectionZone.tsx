
interface HoverDetectionZoneProps {
  setIsHovering: (isHovering: boolean) => void;
}

const HoverDetectionZone = ({ setIsHovering }: HoverDetectionZoneProps) => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-12 z-40 cursor-default"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-hidden="true"
    />
  );
};

export default HoverDetectionZone;
