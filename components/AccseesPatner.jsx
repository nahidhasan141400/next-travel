import Image from "next/image";
import Router from "next/router";
import style from "../components/moduleStyle/acp.module.scss";
const AccseesPatner = () => {
  return (
    <div className={style.main}>
      <div className="w-full text-center py-2">
        <h1 className="text-4xl bg-gradient-to-bl from-logoBlue font-bold to-logoRay text-transparent bg-clip-text">
          Access Partner of
        </h1>
      </div>
      <div className={style.slider}>
      <div className={style.row}>
        {/* card  */}

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => {
          return (
            <div key={i} className={style.card}>
              <div onClick={()=>{
                 Router.push("/Ticket");
              }} className={style.imgcon}>
                <Image
                  src={`/logo/airline/airlinelogo${e}.png`}
                  layout="fill"
                  className={style.img}
                  alt="sunholidays"
                />
              </div>
            </div>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => {
          return (
            <div key={i} className={style.card}>
              <div onClick={()=>{
                 Router.push("/Ticket");
              }} className={style.imgcon}>
                <Image
                  src={`/logo/airline/airlinelogo${e}.png`}
                  layout="fill"
                  className={style.img}
                  alt="sunholidays"
                />
              </div>
            </div>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => {
          return (
            <div key={i} className={style.card}>
              <div onClick={()=>{
                 Router.push("/Ticket");
              }} className={style.imgcon}>
                <Image
                  src={`/logo/airline/airlinelogo${e}.png`}
                  layout="fill"
                  className={style.img}
                  alt="sunholidays"
                />
              </div>
            </div>
          );
        })}
      </div>
      </div>
      
    </div>
  );
};

export default AccseesPatner;
