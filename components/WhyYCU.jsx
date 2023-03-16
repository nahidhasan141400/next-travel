const WhyYCU = () => {
  return (
    <div className="w-full relative">
      <div className="w-full max-w-6xl mx-auto ">
        <div>
          <h1 className="uppercase py-8 w-full text-center font-extrabold text-3xl bg-gradient-to-t from-logoRay to-logoBlue text-transparent bg-clip-text">
            WHY CHOOSE SUN Holidays
          </h1>
        </div>
        {/* icons  */}
        <div className="flex relative w-full py-4 flex-col md:flex-row  justify-between items-center">
          <div className="relative w-52 h-52 flex justify-center items-center flex-col">
            <img className="w-40 hover:animate-bounce" src="/img/icon/airplane.png" alt="" />
            <p className="text-xl py-3">Experienced</p>
          </div>
          <div className="relative w-52 h-52 flex justify-center items-center flex-col">
            <img className="w-40 hover:animate-bounce" src="/img/icon/luggage-cart.png" alt="" />
            <p className="text-xl py-3">World Class Service</p>
          </div>
          <div className="relative w-52 h-52 flex justify-center items-center flex-col">
            <img className="w-40 hover:animate-bounce" src="/img/icon/booking.png" alt="" />
            <p className="text-xl py-3">Best Price Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYCU;
