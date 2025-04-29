
// TitleStripe component for consistent page headers
const TitleStripe = ({ title }: { title: string }) => {
  // Bunting flags subcomponent
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
    <section className="relative py-16 bg-dance-brown">
      <BuntingFlags />
      <div className="container-fluid mx-auto text-center pt-4 pb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-dance-orange mb-6 animate-fade-in animation-delay-200">
          {title}
        </h2>
      </div>
      <BuntingFlags />
    </section>
  );
};

export default TitleStripe;
