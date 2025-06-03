

// TitleStripe component for consistent page headers
const TitleStripe = ({ title }: { title: string }) => {
  // Bunting flags subcomponent - commented out but kept for future use
  /* 
  This is the animated bunting flags component that can be re-enabled in the future.
  It displays decorative triangular flags with different colors and a wave animation.
  */
  const BuntingFlags = () => {
    const flagColors = [
      'bg-dance-flag-red', 
      'bg-dance-flag-blue', 
      'bg-dance-flag-green', 
      'bg-dance-flag-orange'
    ];
    
    return (
      <div className="bunting-container relative w-full flex justify-center py-2">
        <div className="flex items-center">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`flag ${flagColors[i % flagColors.length]} animate-flag-wave`} 
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 bg-dance-brown w-full">
      {/* Bunting flags commented out - can be re-enabled by uncommenting the line below */}
      {/* <BuntingFlags /> */}
      <div className="container-fluid mx-auto text-center pt-4 pb-8">
        <h2 
          className="text-4xl md:text-6xl font-bold text-dance-orange mb-6 animate-fade-in animation-delay-200 no-bullet font-custom" 
          style={{ 
            fontFamily: "'CustomFont', sans-serif",
            fontSize: 'clamp(3rem, 5vw, 7.2rem)' /* Increased from 2.5rem to 3rem min, 6rem to 7.2rem max to compensate for custom font */
          }}
        >
          {title}
        </h2>
      </div>
    </section>
  );
};

export default TitleStripe;

