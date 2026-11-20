import AboutForro from "@/sections/AboutForro";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import CustomEvents from "@/sections/CustomEvents";
import Events from "@/sections/Events";
import Home from "@/sections/Home";
import Partners from "@/sections/Partners";
import Rules from "@/sections/Rules";

// The whole site is one page; the menu scrolls to each section by its id.
export default function HomePage() {
  return (
    <>
      <Home />
      <AboutForro />
      <AboutUs />
      <Events />
      <CustomEvents />
      <Rules />
      <Partners />
      <Contact />
    </>
  );
}
