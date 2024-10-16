import React from 'react'

const Button = (props) => {
  return (
    <button className={`flex items-center gap-3  text-black px-[20px] py-[10px] rounded-full  sm:text-[16px] text-[12px] ${props.className}`}>
        {props.position === 'left' && props.icon}
        {props.title}
        {props.position === 'right' && props.icon}
    </button>
  )
}

export default Button