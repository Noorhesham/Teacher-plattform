import React from "react";

const ButtonGlow = ({className,text,padding}:{className?:string,text:string,padding?:String}) => {
  return (
    <div className={`relative inline-flex w-fit self-end   group ${className||"text-lg"}`}>
      <div className="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <a
        href="#"
        title="سجل الدخول الان"
        className={`${padding||'px-8 py-4'} relative  inline-flex items-center justify-center   font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
        role="button"
      >
        {text}
      </a>
    </div>
  );
};

export default ButtonGlow;
