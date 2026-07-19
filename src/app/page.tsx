import Image from "next/image";
// import FirstPage from "./Home/page";
import About from "./About/page";
import Hero from "./Hero/page";
import Contact from "./Contact/page";
import OurPortfolio from "./OurPortfolio/page";
import OurFounders from "./OurFounders/page";
import ContactSection from "./_components/ContactSection/ContactSection";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>

      <OurFounders></OurFounders>

      <OurPortfolio></OurPortfolio>

      <ContactSection isInView ></ContactSection>
    </div>
  );
}
