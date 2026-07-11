import Image from "next/image";
// import FirstPage from "./Home/page";
import About from "./About/page";
import Hero from "./Hero/page";
import Contact from "./Contact/page";
import OurPortfolio from "./OurPortfolio/page";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <OurPortfolio></OurPortfolio>
      <Contact></Contact>
    </div>
  );
}
