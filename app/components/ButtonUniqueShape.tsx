import React from 'react'

const ButtonUniqueShape = ({text}:{text:string}) => {
  return (
    <button className="button--hexagon duration-200 dark:border-gray-200 border-black border-2 px-8 py-4 text-2xl "><span>{text}</span></button>

  )
}

export default ButtonUniqueShape
