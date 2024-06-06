import React from 'react'

const LargeHeading = ({text,paragraph,className}:{text:string,paragraph?:string,className?:string}) => {
  return (
    <div className=' flex flex-col items-end text-right gap-2'>
      <h1 className={` dark:text-gray-100 text-gray-950 text-3xl  leading-relaxed  lg:text-5xl  ${className||'xl:text-7xl'}`}>استاذ ادهم للفيزياء بلا بلا اي كلام في التنجان</h1>
        <p className=' mt-3 dark:text-gray-400 text-gray-500 leading-7'>هري كتير اوي بس كلام مش لازن يتقال بلا بلا </p>
    </div>
  )
}

export default LargeHeading
