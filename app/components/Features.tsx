import React from "react";
import LargeHeading from "./LargeHeading";
import { PiStudent } from "react-icons/pi";
import IconBageCol from "./IconBageCol";
import { ParticlesComponent } from "./Particles";

const Features = () => {
  return (
    <section className=" grid relative py-10 gap-4 px-20 bg-purple-100 dark:bg-purple-700 grid-cols-3">
      <div className="py-4 px-8 bg-white dark:bg-slate-900  rounded-xl">
        <IconBageCol
          className="  flex-col-reverse "
          head=" هتحل اسئلة وتدرب وتفهم بعمق "
          desc="  loreaposdgmignebkpnti-jvmosadigspadbadsp كويس كويس لبسخيحرصثقحبةخينجثجقلخيرةح  مش هسيبك غير لما تكون فاهم"
          color="bg-blue-500 shadow-sky-400"
          icon={<PiStudent />}
        />
      </div>
      <div className=" flex gap-3 py-4 px-8 bg-white dark:bg-slate-900  rounded-xl col-span-2">
        <div className=" relative w-[22rem] flex-grow ">
          <img alt="book" className=" object-cover  " src={"/book 1.png"} />
        </div>
        <div className="flex flex-col gap-2">
          <LargeHeading
            className=" text-3xl lg:text-5xl"
            text="ليه تذاكر معايا ؟"
            paragraph="هنجاوب اسئلتك اول بأول ومش هنسيبك الا وانت فاهم"
          />
          <button className="inline-flex w-fit ml-auto h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Shimmer
          </button>
        </div>
      </div>
      <div className="py-4 px-8 bg-white dark:bg-slate-900  rounded-xl">
        <IconBageCol
          className="  flex-col-reverse "
          head=" هتحل اسئلة وتدرب وتفهم بعمق "
          desc="  loreaposdgmignebkpnti-jvmosadigspadbadsp كويس كويس لبسخيحرصثقحبةخينجثجقلخيرةح  مش هسيبك غير لما تكون فاهم"
          color="bg-blue-500 shadow-sky-400"
          icon={<PiStudent />}
        />
      </div>
      <div className="py-4 px-8 bg-white dark:bg-slate-900  rounded-xl">
        <IconBageCol
          className="  flex-col-reverse "
          head=" هتحل اسئلة وتدرب وتفهم بعمق "
          desc="  loreaposdgmignebkpnti-jvmosadigspadbadsp كويس كويس لبسخيحرصثقحبةخينجثجقلخيرةح  مش هسيبك غير لما تكون فاهم"
          color="bg-blue-500 shadow-sky-400"
          icon={<PiStudent />}
        />
      </div>{" "}
      <div className="py-4 px-8 bg-white dark:bg-slate-900  rounded-xl">
        <IconBageCol
          className="  flex-col-reverse "
          head=" هتحل اسئلة وتدرب وتفهم بعمق "
          desc="  loreaposdgmignebkpnti-jvmosadigspadbadsp كويس كويس لبسخيحرصثقحبةخينجثجقلخيرةح  مش هسيبك غير لما تكون فاهم"
          color="bg-blue-500 shadow-sky-400"
          icon={<PiStudent />}
        />
      </div>
    </section>
  );
};

export default Features;
