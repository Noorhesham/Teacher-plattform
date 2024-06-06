'use client'
import React, { useEffect, useState } from "react";
const swappers = ["ذاكر وتعلم", "وفر وقت السنتر", "عيد الفيديو زي منت عاوز", "قيم نفسك بكويزات"];
const Swapping = () => {
    const [active,setActive]=useState(0)
    useEffect(function(){
        console.log(active)
        const intervalId=setInterval(() => {
            if(active===swappers.length-1) setActive(0)
            else setActive(a=>a+1)
        }, 1500);
        return () => clearInterval(intervalId);
    },[active])
  return (
    <div className="flex gap-4 text-xl text-right text-gray-400  flex-col">
      {swappers.map((text,i) => (
        <h4 className={`${active===i?' text-black dark:text-white -translate-y-2':""} duration-200`} key={text}>{text}</h4>
      ))}
    </div>
  );
};

export default Swapping;
