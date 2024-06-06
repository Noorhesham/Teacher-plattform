import React from "react";
import LargeHeading from "./LargeHeading";
import AnimatedImage from "./AnimatedImage";
import ButtonGlow from "./ButtonGlow";
import Wave from "./Wave";
import ButtonUniqueShape from "./ButtonUniqueShape";

const Hero = () => {
  return (
    <section className="flex relative pt-40 items-center gap-5 justify-between pb-0 p-20">
      <Wave />
  
      <div className=" z-10  relative flex flex-col">
        <LargeHeading text="" />
        <div className=" flex items-end gap-5 ml-auto">
          <ButtonGlow text="شاهد الان" className=" text-lg  mt-5" />
          <ButtonUniqueShape text=" اكتشف المزيد"  />
        </div>
      </div>
      <div className=" w-full mt-auto h-full ">
      <AnimatedImage className=" w-full" /> 
      </div>
    </section>
  );
};

export default Hero;
