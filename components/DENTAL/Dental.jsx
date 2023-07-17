import Image from 'next/image'
import React from 'react'

const Dental = () => {
  return (
    <div className='w-full relative py-3 webpatert'>
        <div className="w-full relative max-w-[1200px] mx-auto p-3 pb-5 mb-7">
            <div className='w-full text-center  flex justify-center'>
                    <h1 className='text-4xl relative pt-10  pb-16 font-bold '>Special <span className='text-logoRay'>Service</span></h1>
                    <div className='absolute w-[200px] top-24 '>
                        <img src="/graphic/under-line.png" alt="sun" />
                    </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full relative'>
                <div>
                    <h2 className='text-2xl pl-2'>Hight Quality</h2>
                    <h1 className='text-6xl font-bold capitalize'><span className=' text-logoRay'>Dental</span> treatment</h1>
                    <p className='pl-2 mt-2 text-justify text-lg text-neutral-600'>
                    At Sun Holidays Ltd, we take pride in offering comprehensive tour and travel services to our valued customers. In addition to our exceptional vacation packages, we are pleased to provide an extra facility that sets us apart – affordable dental treatment. Recognizing the rising costs of dental care, we have partnered with trusted dental professionals to offer low-cost dental treatments, ensuring our customers can enjoy their vacations while taking care of their oral health. Whether you need a routine check-up, teeth cleaning, or more extensive procedures, our dedicated team is ready to assist you, making your travel experience even more convenient and beneficial.
                    </p>
                    <button className='text-2xl font-bold bg-logoRay hover:scale-105 ease-linear transition-all w-full mr-10 mt-10 py-4 rounded-full text-base-100 shadow-2xl hover:shadow-logoSun/70 shadow-logoSun'>
                        Details
                    </button>
                </div>
                <div className="relative w-full h-full min-h-[200px]">
                    <Image src={'/svg/dentist.webp'} fill={true} className='object-contain' alt='sun'/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Dental