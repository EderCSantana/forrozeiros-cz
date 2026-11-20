import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LanguageProvider from "@/i18n/LanguageProvider";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";

const homePaths = ["/", "/index.html"];

export default function App() {
  const isHomePage = homePaths.includes(window.location.pathname);

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{isHomePage ? <HomePage /> : <NotFound />}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
