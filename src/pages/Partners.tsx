import React from "react";
import { Building, Coffee, Music, User, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import TitleStripe from "../components/TitleStripe";
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
      <Icon className="text-dance-orange mr-4" size={24} />
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
  contactInfo,
  t
}: { 
  title: string; 
  description: React.ReactNode; 
  websiteUrl: string;
  imageUrl?: string;
  contactInfo?: React.ReactNode;
  t: (key: string) => string;
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <Card className="bg-white border border-dance-cream hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-dance-brown">{title}</CardTitle>
          {imageUrl && (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
              <img src={imageUrl.startsWith('http') ? imageUrl : baseUrl + imageUrl.replace(/^\//, '')} alt={title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {imageUrl && imageUrl.includes("2c6ea6ad") && (
          <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
            <img src={imageUrl.startsWith('http') ? imageUrl : baseUrl + imageUrl.replace(/^\//, '')} alt={title} className="w-full h-full object-cover" />
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
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{t("partners.visit_website")}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

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
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <Card className="bg-white border border-dance-cream hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-4">
          {imageUrl ? (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
              <img src={imageUrl.startsWith('http') ? imageUrl : baseUrl + imageUrl.replace(/^\//, '')} alt={name} className="w-full h-full object-cover" />
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
};

const Partners = () => {
  const { t } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen flex flex-col">
      <TitleStripe title={t("partners.title")} />
      
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-medium text-dance-brown mb-4 no-bullet">
              {t("partners.intro")}
            </h2>
            <p className="text-dance-black text-opacity-80">
              {t("partners.intro.description")}
            </p>
          </div>
          
          {/* Venues Section */}
          <PartnerSection title={t("partners.venues")} icon={Building}>
            <PartnerCard
              title={t("partners.venues.kps.title")}
              description={
                <div dangerouslySetInnerHTML={{ __html: t("partners.venues.kps.description") }} />
              }
              imageUrl={baseUrl + "lovable-uploads/2c6ea6ad-f9c8-4ae6-8770-9a1c57f0ead7.png"}
              websiteUrl={t("partners.venues.kps.website")}
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>{t("partners.venues.kps.address")}</div>
                    <div>Facebook: <a href="https://facebook.com/kpsmichov" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.venues.kps.facebook")}</a></div>
                    <div>Instagram: <a href="https://instagram.com/komunitniprostorsmichov" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.venues.kps.instagram")}</a></div>
                  </div>
                </>
              }
              t={t}
            />
            
            <PartnerCard
              title={t("partners.venues.dorado.title")}
              description={
                <div dangerouslySetInnerHTML={{ __html: t("partners.venues.dorado.description") }} />
              }
              imageUrl={baseUrl + "lovable-uploads/da5481c2-3179-4ed6-a48e-bbc1ab623685.png"}
              websiteUrl={t("partners.venues.dorado.website")}
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>{t("partners.venues.dorado.address")}</div>
                    <div>Facebook: <a href="https://facebook.com/doradocoffee.cz" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.venues.dorado.facebook")}</a></div>
                    <div>Instagram: <a href="https://instagram.com/doradocoffee.cz" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.venues.dorado.instagram")}</a></div>
                  </div>
                </>
              }
              t={t}
            />
          </PartnerSection>
          
          {/* Teachers Section */}
          <PartnerSection title={t("partners.teachers")} icon={GraduationCap}>
            <TeacherCard
              name={t("partners.teachers.emilson.name")}
              imageUrl={baseUrl + "lovable-uploads/c88e5523-748b-4dc0-8324-e940ec54e172.png"}
              description={
                <>
                  <p className="mb-2"><strong>{t("partners.teachers.emilson.title")}</strong></p>
                  <div dangerouslySetInnerHTML={{ __html: t("partners.teachers.emilson.description") }} />
                  
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    <li><strong>{t("partners.teachers.emilson.specialization")}</strong></li>
                    <li><strong>{t("partners.teachers.emilson.experience")}</strong></li>
                    <li><strong>{t("partners.teachers.emilson.achievement")}</strong></li>
                  </ul>
                </>
              }
              socialLinks={
                <>
                  <div className="grid gap-1">
                    <div>Website: <a href={t("partners.teachers.emilson.website")} target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.emilson.website")}</a></div>
                    <div>Facebook: <a href="https://facebook.com/emilson.bernardes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.emilson.facebook")}</a></div>
                    <div>Instagram: <a href="https://instagram.com/emilson_bernardes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.emilson.instagram")}</a></div>
                  </div>
                </>
              }
            />
            
            <TeacherCard
              name={t("partners.teachers.zuzana_olga.name")}
              description={
                <div dangerouslySetInnerHTML={{ __html: t("partners.teachers.zuzana_olga.description") }} />
              }
              socialLinks={
                <>
                  <div>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.zuzana_olga.instagram")}</a></div>
                </>
              }
            />
            
            {/* Other Teachers */}
            <div className="md:col-span-2 mt-6">
              <h4 className="text-lg font-medium text-dance-brown mb-3 no-bullet">{t("partners.teachers.others.title")}</h4>
              <p className="mb-4 text-dance-black text-opacity-80">{t("partners.teachers.others.description")}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dance-cream bg-opacity-20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={baseUrl + "lovable-uploads/f00dd62e-aa39-4ffa-89fd-dbb71a75823f.png"} alt={t("partners.teachers.carlos_fernanda.name")} />
                      <AvatarFallback>CF</AvatarFallback>
                    </Avatar>
                    <h5 className="text-dance-brown font-medium no-bullet">{t("partners.teachers.carlos_fernanda.name")}</h5>
                  </div>
                  <div className="text-sm space-y-1 text-dance-black text-opacity-80">
                    <p>Instagram: <a href="https://instagram.com/carlosandfernanda" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.carlos_fernanda.instagram")}</a></p>
                    <p>Facebook: <a href="https://facebook.com/CarlosAndFernana" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.carlos_fernanda.facebook")}</a></p>
                    <p>Website: <a href="https://www.carlosfernanda.com/" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.carlos_fernanda.website")}</a></p>
                  </div>
                </div>
                
                <div className="bg-dance-cream bg-opacity-20 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={baseUrl + "lovable-uploads/e758027e-2d62-4b95-978a-9723007d7120.png"} alt={t("partners.teachers.andre.name")} />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <h5 className="text-dance-brown font-medium no-bullet">{t("partners.teachers.andre.name")}</h5>
                  </div>
                  <div className="text-sm space-y-1 text-dance-black text-opacity-80">
                    <p>Instagram: <a href="https://instagram.com/andrenegrao_official" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.andre.instagram")}</a></p>
                    <p>Facebook: <a href="https://facebook.com/andre.negraoii.5" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.teachers.andre.facebook")}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </PartnerSection>
          
          {/* Local Band Section */}
          <PartnerSection title={t("partners.local_band")} icon={Music}>
            <PartnerCard
              title={t("partners.band.tres_coracoes.title")}
              description={
                <div dangerouslySetInnerHTML={{ __html: t("partners.band.tres_coracoes.description") }} />
              }
              imageUrl={baseUrl + "lovable-uploads/4248740d-6b87-4e68-8294-ae54f0b5c7fe.png"}
              websiteUrl={t("partners.band.tres_coracoes.website")}
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Facebook: <a href="https://facebook.com/grupo.tres.coracoes.2025" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.band.tres_coracoes.facebook")}</a></div>
                    <div>Instagram: <a href="https://instagram.com/grupo_trescoracoes" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.band.tres_coracoes.instagram")}</a></div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={baseUrl + "lovable-uploads/31c5fb8c-8211-47ba-b540-cbf45b0af818.png"} alt={t("partners.band.devail.name")} />
                        <AvatarFallback>DS</AvatarFallback>
                      </Avatar>
                      <h5 className="font-medium">{t("partners.band.devail.name")}</h5>
                    </div>
                    <div className="text-sm mt-1">
                      <div>Facebook: <a href="https://facebook.com/devanil.santos" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.band.devail.facebook")}</a></div>
                      <div>Instagram: <a href="https://instagram.com/devanilsantossamek" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.band.devail.instagram")}</a></div>
                    </div>
                  </div>
                </>
              }
              t={t}
            />
          </PartnerSection>
          
          {/* Others Section */}
          <PartnerSection title={t("partners.others")} icon={Globe}>
            <PartnerCard
              title={t("partners.others.camoes.title")}
              description={
                <div dangerouslySetInnerHTML={{ __html: t("partners.others.camoes.description") }} />
              }
              websiteUrl={t("partners.others.camoes.website")}
              contactInfo={
                <>
                  <div className="grid gap-1">
                    <div>Facebook: <a href="https://facebook.com/institutocamoespraga" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.others.camoes.facebook")}</a></div>
                    <div>Instagram: <a href="https://instagram.com/instituto_camoes_praga" target="_blank" rel="noopener noreferrer" className="text-dance-orange hover:underline">{t("partners.others.camoes.instagram")}</a></div>
                  </div>
                </>
              }
              t={t}
            />
          </PartnerSection>
        </div>
      </main>
    </div>
  );
};

export default Partners;
