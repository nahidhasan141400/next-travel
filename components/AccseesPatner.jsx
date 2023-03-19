import Image from "next/image";
import style from "../components/moduleStyle/acp.module.scss";
const AccseesPatner = () => {
  return (
    <div className={style.main}>
    <div className="w-full text-center py-2">
        <h1 className="text-4xl bg-gradient-to-bl from-logoBlue font-bold to-logoRay text-transparent bg-clip-text">Access Partner of</h1>
    </div>
  <div className={style.row}>
    {/* card  */}
    <div className={style.card}>
      <div className={style.imgcon}>
        <Image
          src={"/logo/IATA_logo.png"}
          layout="fill"
          className={style.img}
        />
      </div>
    </div>

    {/* card end  */}
    {/* card  */}
    <div className={style.card}>
      <div className={style.imgcon}>
        <Image
          src={
            "/logo/association-of-travel-agents-of-bangladesh-atab-seeklogo.com.png"
          }
          layout="fill"
          className={style.img}
        />
      </div>
    </div>

    {/* card end  */}
  </div>
</div>
  )
}

export default AccseesPatner