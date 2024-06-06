import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

export default function Home() {
  return (
   <main className=" overflow-hidden ">
    <Hero/>
    {/* <div id="particles-container" className="absolute  inset-0">
        <ParticlesComponent />
      </div> */}
    <About/>
    <Features/>
   </main>
  );
}
