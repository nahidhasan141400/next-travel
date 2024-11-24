const HotelCard = () => {
  return (
    <div className="w-full relative my-4">
      <div className="w-full text-center flex flex-col justify-center items-center  relative h-full flex-2">
        <p className="font-2xl text-neutral-700">
          Take Experience To our 5 star standard hotel
        </p>
        <h1 className="text-4xl font-bold bg-gradient-to-t from-logoRay to-logoBlue text-transparent bg-clip-text pb-2">
          Grandeur Bliss
        </h1>
      </div>
      <div className="max-w-6xl text-[#000] mx-auto grid grid-cols-2 gap-2 my-4">
        <img
          src="/graphic/Sun-Holidays-Leaflet-Editable.jpg"
          alt=""
          className="w-full rounded-lg"
        />
        <div className="w-full p-2">
          <h1 className="text-4xl  flex ">
            <img className="w-10" src="/hotel.png" alt="" />
            Grandeur Bliss
          </h1>
          <p>
            Grandeur Bliss Sun Holidays Ltd. Its a state-of-the-art luxury
            hotel, adjacent to Inani Beach (Marine Drive Road) in Cox's Bazar.
          </p>
          <p className="mt-2">BUILDING & ROOM DETAILS:</p>
          <ul className="list-outside ml-7">
            <li>
              <b>Total Rooms</b>: 250 room
            </li>
            <li>
              <b>Deluxe Rooms:</b> 200 room, 425 sqft
            </li>
            <li>
              <b>Suite Rooms:</b> 30 room, 550 sqft
            </li>
            <li>
              <b>Family Suites:</b> 15 room, 675 sqft{" "}
            </li>
            <li>
              <b>Presidential Suites:</b> 5 room, 1500 sqft{" "}
            </li>
            <li>
              <b>Also has:</b>
              <p>
                Huge swimming pool, gym, spa, meeting room, sports. zone,
                conference room, kids zone, parking, social coffee shop, buffet
                restaurant, live bar-b-que zone, prayer area etc. There are also
                all the facilities of a five star hotel.
              </p>
            </li>
          </ul>

          <div className="w-full flex justify-start mt-4">
            <button className="btn btn-outline btn-warning ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
