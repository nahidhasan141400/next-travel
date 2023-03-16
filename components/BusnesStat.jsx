
const BusnesStat = () => {
  return (
    <div className='bg-img2  w-full relative'>
        <div className="relative mx-auto max-w-5xl">
            <div className="w-full p-6 text-3xl text-center mb-3">
                <h1>SUN HOLIDAYS BUSINESS DEPTH</h1>
            </div>
            <div className="w-full flex flex-wrap flex-col md:flex-row  justify-center  md:justify-between items-center py-2 px-1 pb-6">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-36" src="/img/icon/customer-review.png" alt="sun" />
                        <p className="text-logoSun font-bold text-6xl">2,000</p>
                        <p className="text-xl">SATISFIED CUSTOMERS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-36" src="/img/icon/map.png" alt="sun" />
                        <p className="text-logoSun font-bold text-6xl">200</p>
                        <p className="text-xl">COVERED DESTINATIONS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-36" src="/img/icon/work.png" alt="sun" />
                        <p className="text-logoSun font-bold text-6xl">8</p>
                        <p className="text-xl">YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-36" src="/img/icon/family.png" alt="sun" />
                        <p className="text-logoSun font-bold text-6xl">250</p>
                        <p className="text-xl">TOUR PACKAGES</p>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default BusnesStat