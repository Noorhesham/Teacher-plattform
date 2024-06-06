import React from "react";
import AnimatedImage from "./AnimatedImage";
import data from "../data/animate2.json";
import { PiChalkboardTeacherThin, PiStudent } from "react-icons/pi";
import IconBage from "./IconBage";
import { FaStopwatch } from "react-icons/fa";
import Swapping from "./Swapping";
import LargeHeading from "./LargeHeading";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex  mx-auto relative px-14 py-7 pt-24 flex-col">
      <h1 className=" text-center text-7xl mb-2 font-bold">هتقفل الفيزياء مع ادهم الهوجاء</h1>
      <div className="flex items-center justify-center gap-4">
        <Swapping />
        <AnimatedImage className="max-w-full" data={data} />
        <div className="flex gap-5 text-right items-end flex-col">
          <IconBage
            head="خبره 10 سنوات "
            desc="في تدريس الفيزياء"
            color="bg-orange-500 shadow-yellow-400"
            icon={<PiChalkboardTeacherThin />}
          />
          <IconBage
            head=" هتحل اسئلة وتدرب وتفهم بعمق "
            desc="  مش هسيبك غير لما تكون فاهم"
            color="bg-blue-500 shadow-sky-400"
            icon={<PiStudent />}
          />
          <IconBage
            head=" مش هتتأخر عن زمايلك   "
            desc="  الحصص هتنزل في معادها بل ابدر"
            color="bg-rose-500 shadow-pink-400"
            icon={<FaStopwatch />}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
