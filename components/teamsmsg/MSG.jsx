import React from 'react'

const MSG = ({data,close}) => {
  return (
    <div
        onClick={(e)=>{
           
           e.stopPropagation();
            close(false)}}
    className=' flex justify-center items-center w-full h-screen fixed bg-logoRay/20 top-0 left-0 backdrop-blur-md z-30'>

        <div className='w-full max-w-[800px] relative p-3 bg-base-100'>
                <div className='w-full flex justify-center'>
                    <img src={data.img} className='w-80' alt={data.name} />
                </div>
        </div>
       
    </div>
  )
}

export default MSG