import TitleStripe from "../components/TitleStripe";
import { useLanguage } from "../contexts/LanguageContext";
import { Building, Coffee, Music, User, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PartnerSection = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-dance-orange bg-opacity-10 rounded-full flex items-center justify-center mr-4">
        <Icon className="text-dance-orange" size={24} />
      </div>
      <h3 className="text-2xl md:text-3xl font-display font-medium no-bullet">
        {title}
      </h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  </section>
);

const PartnerCard = ({ 
  title, 
  description, 
  websiteUrl, 
  imageUrl,
  contactInfo
}: { 
  title: string; 
  description: React.ReactNode; 
  websiteUrl: string;
  imageUrl?: string;
  contactInfo?: React.ReactNode;
}) => (
  <Card className="bg-white border border-dance-cream hover:shadow-md transition-all duration-300">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl text-dance-brown">{title}</CardTitle>
        {imageUrl && (
          <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </CardHeader>
    <CardContent>
      {imageUrl && imageUrl.includes("2c6ea6ad") && (
        <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="prose text-dance-black text-opacity-80 mb-4">
        {description}
      </div>
      {contactInfo && (
        <>
          <Separator className="my-4" />
          <div className="text-sm text-dance-black text-opacity-70">
            {contactInfo}
          </div>
        </>
      )}
    </CardContent>
    <CardFooter>
      <Button asChild className="w-full bg-dance-orange hover:bg-dance-orange/90">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </Button>
    </CardFooter>
  </Card>
);

const TeacherCard = ({ 
  name, 
  description, 
  socialLinks,
  imageUrl
}: { 
  name: string; 
  description: React.ReactNode; 
  socialLinks: React.ReactNode;
  imageUrl?: string;
}) => (
  <Card className="bg-white border border-dance-cream hover:shadow-md transition-all duration-300">
    <CardHeader>
      <div className="flex items-center gap-4">
        {imageUrl ? (
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full overflow-hidden bg-dance-cream flex items-center justify-center">
            <User className="text-dance-brown" size={32} />
          </div>
        )}
        <CardTitle className="text-xl text-dance-brown">{name}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div className="prose text-dance-black text-opacity-80">
        {description}
      </div>
    </CardContent>
    <CardFooter>
      <div className="text-sm text-dance-black text-opacity-70 w-full">
        {socialLinks}
      </div>
    </CardFooter>
  </Card>
);

const Partners = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <TitleStripe title={t("partners.title")} />
      
      <main className="flex-grow py-12 md:py-16 bg-white">
        <div className="container-fluid mx-auto">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-medium text-dance-brown mb-4 no-bullet">
              Partners of Forrozeiros Prague
            </h2>
            <p className="text-dance-black text-opacity-80">
              We are proud to collaborate with these wonderful organizations and individuals who help us spread the joy of forró in Prague.
            </p>
          </div>
          
          {/* Venues Section */}
          <PartnerSection title="Venues" icon={Building}>
            <PartnerCard
              title="Komunitní Prostor Smíchov"
              description={
                <>
                  <p className="mb-3">Komunitní Prostor Smíchov (KPS) is a multifunctional community space in Prague that hosts cultural, educational, and social activities. It aims to bring people together across generations and backgrounds, including socially disadvantaged families, seniors, immigrants, and ethnic minorities.</p>
                  <p>Rooted in values of self-awareness, education, and action, KPS offers a variety of programs that range from meditative practices to community gardening and legal counseling.</p>
                  <p>The venue supports diverse artistic and physical activities, including forró, balfolk, swing dance, yoga, tai chi chuan, and movement improvisation. It plays a vital role in the local cultural landscape and is the home of our weekly forró events.</p>
                </>
              }
              imageUrl="/lovable-uploads/2c6ea6ad-f9c8-4ae6-8770-9a1c57f0ead7.png"
              websiteUrl="https://komunitniprostorevangelik.cz"
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Address: Na Doubkové 8, 150 00 Praha 5</div>
                    <div>Facebook: <a href="https://facebook.com/kpsmichov" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/kpsmichov</a></div>
                    <div>Instagram: <a href="https://instagram.com/komunitniprostorsmichov" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@komunitniprostorsmichov</a></div>
                  </div>
                </>
              }
            />
            
            <PartnerCard
              title="Dorado Coffee"
              description={
                <>
                  <p className="mb-3">Dorado Coffee is a small family-run coffee shop with roots in Colombia. Founded by Ami and his family, who grew up farming coffee in the mountains of Villagómez, Colombia, the business brings a personal and ethical touch to Prague's coffee scene.</p>
                  <p>The mission of Dorado is to provide high-quality coffee while ensuring fair conditions for the farmers who grow it.</p>
                  <p>Beyond serving delicious coffee, Dorado Coffee supports the arts and community by hosting events and concerts. Recently, it has become a cozy spot for forró concerts with Três Corações, where dancers gather and enjoy the rhythms of Brazil.</p>
                </>
              }
              imageUrl="/lovable-uploads/da5481c2-3179-4ed6-a48e-bbc1ab623685.png"
              websiteUrl="https://doradocoffee.cz"
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Address: Letohrádek Kinských, Kinského zahrada 98, 150 00 Praha 5-Petřín</div>
                    <div>Facebook: <a href="https://facebook.com/doradocoffee.cz" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/doradocoffee.cz</a></div>
                    <div>Instagram: <a href="https://instagram.com/doradocoffee.cz" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@doradocoffee.cz</a></div>
                  </div>
                </>
              }
            />
          </PartnerSection>
          
          {/* Teachers Section */}
          <PartnerSection title="Teachers" icon={GraduationCap}>
            <TeacherCard
              name="Emilson Bernardes"
              imageUrl="/lovable-uploads/c88e5523-748b-4dc0-8324-e940ec54e172.png"
              description={
                <>
                  <p className="mb-2"><strong>Tanečník, lektor tance, choreograf</strong></p>
                  <p className="mb-3">Emilson is a Brazilian dancer who has been living in Prague for 12 years. He brings rich experience in improvisation and choreography, having participated in numerous workshops, festivals, and congresses around the world. In recent years, he has been organizing dance events and promoting Brazilian culture throughout Europe. Emilson is multilingual—he speaks Portuguese, Spanish, English, and Czech.</p>
                  <p>In Prague, he teaches various Latin and Brazilian dances, including forró, samba, salsa, and bachata. He has also been involved with La Tropical, offering classes and spreading the joy of dance.</p>
                  
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    <li><strong>Specialization:</strong> Samba, Bolero, Tango, Salsa, Rumba, Bachata, Forró, Zouk, Kizomba</li>
                    <li><strong>Experience:</strong> Carnival - Imperio Serrano Samba School, Brazil</li>
                    <li><strong>Achievement:</strong> Czech Dance Master 2016</li>
                  </ul>
                </>
              }
              socialLinks={
                <>
                  <div className="grid gap-1">
                    <div>Website: <a href="https://www.latropical.cz/node/5514" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">www.latropical.cz/node/5514</a></div>
                    <div>Facebook: <a href="https://facebook.com/emilson.bernardes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/emilson.bernardes</a></div>
                    <div>Instagram: <a href="https://instagram.com/emilson_bernardes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@emilson_bernardes</a></div>
                  </div>
                </>
              }
            />
            
            <TeacherCard
              name="Zuzana & Olga"
              description={
                <>
                  <p>Zuzana and Olga teach together, with an approach focused on balance, embrace, and foundational movement. Although they started teaching recently, they have been actively engaged in the European forró scene, attending festivals and staying connected to the community. They regularly teach basic steps at Prostor events with the help of volunteers, and they also give workshops.</p>
                </>
              }
              socialLinks={
                <>
                  <div>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">Zuzana</a> | <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">Olga</a></div>
                </>
              }
            />
            
            {/* Other Forró Teachers */}
            <div className="md:col-span-2 mt-6">
              <h4 className="text-lg font-medium text-dance-brown mb-3">Other Forró Teachers in Prague</h4>
              <p className="mb-4 text-dance-black text-opacity-80">There are other talented dance teachers in Prague who are not currently offering regular forró classes but occasionally give workshops. Follow their work to stay updated:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dance-cream bg-opacity-20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="public/lovable-uploads/f00dd62e-aa39-4ffa-89fd-dbb71a75823f.png" alt="Carlos & Fernanda" />
                      <AvatarFallback>CF</AvatarFallback>
                    </Avatar>
                    <h5 className="text-dance-brown font-medium">Carlos & Fernanda</h5>
                  </div>
                  <div className="text-sm space-y-1 text-dance-black text-opacity-80">
                    <p>Instagram: <a href="https://instagram.com/carlosandfernanda" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@carlosandfernanda</a></p>
                    <p>Facebook: <a href="https://facebook.com/CarlosAndFernana" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">CarlosAndFernana</a></p>
                    <p>Website: <a href="https://www.carlosfernanda.com/" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">www.carlosfernanda.com</a></p>
                  </div>
                </div>
                
                <div className="bg-dance-cream bg-opacity-20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="public/lovable-uploads/e758027e-2d62-4b95-978a-9723007d7120.png" alt="André Negrão" />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <h5 className="text-dance-brown font-medium">André Negrão</h5>
                  </div>
                  <div className="text-sm space-y-1 text-dance-black text-opacity-80">
                    <p>Instagram: <a href="https://instagram.com/andrenegrao_official" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@andrenegrao_official</a></p>
                    <p>Facebook: <a href="https://facebook.com/andre.negraoii.5" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">andre.negraoii.5</a></p>
                  </div>
                </div>
              </div>
            </div>
          </PartnerSection>
          
          {/* Local Band Section */}
          <PartnerSection title="Local Band" icon={Music}>
            <PartnerCard
              title="Três Corações"
              description={
                <>
                  <p>Três Corações is a local forró band founded by Devail Santos. The band has been playing for several years and is a staple in the Prague forró scene, performing around one to two concerts per month. Their repertoire spans a variety of forró styles and rhythms, making them a beloved presence at community events and dance nights.</p>
                </>
              }
              imageUrl="/lovable-uploads/4248740d-6b87-4e68-8294-ae54f0b5c7fe.png"
              websiteUrl="https://facebook.com/grupo.tres.coracoes.2025"
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Facebook: <a href="https://facebook.com/grupo.tres.coracoes.2025" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/grupo.tres.coracoes.2025</a></div>
                    <div>Instagram: <a href="https://instagram.com/grupo_trescoracoes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@grupo_trescoracoes</a></div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/lovable-uploads/31c5fb8c-8211-47ba-b540-cbf45b0af818.png" alt="Devail Santos" />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <h5 className="font-medium">Devail Santos</h5>
                    </div>
                    <div className="text-sm mt-1">
                      <div>Facebook: <a href="https://facebook.com/devanil.santos" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/devanil.santos</a></div>
                      <div>Instagram: <a href="https://instagram.com/devanilsantossamek" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@devanilsantossamek</a></div>
                    </div>
                  </div>
                </>
              }
            />
          </PartnerSection>
          
          {/* Others Section */}
          <PartnerSection title="Others" icon={Globe}>
            <PartnerCard
              title="Instituto Camões - Prague"
              description={
                <>
                  <p className="mb-3">The Centro de Língua Portuguesa Instituto Camões in Prague is the result of a cooperation agreement between Instituto Camões and Charles University. It aims to promote the Portuguese language and the wide-ranging cultural diversity associated with it.</p>
                  <p className="mb-3">The center supports anyone who uses or wishes to use the Portuguese language in their personal or professional lives, joining a global community of over 230 million speakers across five continents.</p>
                  <p>Instituto Camões values cultural activities and has occasionally featured forró in its events, such as the Lusófona festival. We maintain a close relationship with the staff at the institute and deeply appreciate their work and support. If you've fallen in love with forró and want to learn the language in which its lyrics are written, the institute offers Portuguese language courses.</p>
                </>
              }
              websiteUrl="https://pt.institutocamoes-praga.cz/"
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Facebook: <a href="https://facebook.com/institutocamoespraga" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">facebook.com/institutocamoespraga</a></div>
                    <div>Instagram: <a href="https://instagram.com/instituto_camoes_praga" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">@instituto_camoes_praga</a></div>
                  </div>
                </>
              }
            />
          </PartnerSection>
        </div>
      </main>
    </div>
  );
};

export default Partners;
