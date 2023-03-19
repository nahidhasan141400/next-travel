import React from 'react'

const AboutBaner = ({text}) => {
  return (
    <div className='w-full h-64 bg-img3 flex justify-center items-center'>
            <h1 className='text-3xl font-extrabold capitalize bg-gradient-to-br from-logoSun to-logoBlue bg-clip-text text-transparent'>
                {text}
            </h1>
    </div>
  )
}

export default AboutBaner