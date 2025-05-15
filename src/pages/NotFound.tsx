
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Get the base URL from import.meta.env or default to "/"
  const baseUrl = import.meta.env.BASE_URL || "/";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-dance-beige">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-dance-brown">404</h1>
        <p className="text-xl text-dance-brown mb-8">
          {t('general.notFound') || 'Oops! Page not found'}
        </p>
        <Link 
          to={baseUrl} 
          className="px-6 py-3 bg-dance-orange text-white rounded-lg hover:bg-dance-brown transition-colors duration-300"
        >
          {t('general.returnHome') || 'Return to Home'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
