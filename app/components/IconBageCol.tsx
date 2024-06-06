import React, { ReactNode } from 'react'

const IconBageCol = ({ icon,color,head,desc,className }: { icon: ReactNode,color:string,head:string,desc:string,className?:string }) => {
    return (
        <div className={`flex h-full flex-col justify-evenly gap-5 items-end text-right  ${className} `}>
          <div className="flex text-sm text-gray-500 dark:text-gray-300 flex-col">
            <p className=" font-semibold dark:text-gray-50 text-black">{head}</p>
            <span>{desc}</span>
          </div>
          <div className={`py-3  px-3 rounded-xl  ${color} shadow-lg text-gray-100 font-semibold text-4xl text-center`}>
            {icon}
          </div>
        </div>
      );
}

export default IconBageCol
