import React from 'react'

const AboutBaner = ({text,i=0}) => {
  return (
    <div className={`w-full h-64 bg-bd${i} flex justify-center items-center`}>
            <h1 className='text-3xl font-extrabold capitalize bg-gradient-to-br drop-shadow-md  from-logoSun to-logoBlue bg-clip-text text-transparent'>
                {text}
            </h1>
    </div>
  )
}

export default AboutBaner