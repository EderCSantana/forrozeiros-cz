
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling to catch and log any initialization errors
try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found");
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render application:", error);
  // Show a basic error message if possible
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = '<div style="color: #8b4513; padding: 20px; text-align: center;"><h2>Unable to load application</h2><p>Please try refreshing the page.</p></div>';
  }
}
