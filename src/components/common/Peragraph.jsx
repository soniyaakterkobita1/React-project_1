import React from 'react'

const Peragraph = ({text,className}) => {
  return (
    <div>
      <p className={`text-gray_3 text-base font-normal leading-7.5 ${className}`}>{text}</p>
    </div>
  )
}

export default Peragraph
