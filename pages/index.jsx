import AccseesPatner from "../components/AccseesPatner";
import Affiliate from "../components/Affiliate";
// import BusnesStat from "../components/BusnesStat";
// import Category from "../components/category";
import BookPross from "../components/BookPross";
import Discount from "../components/Discount";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import PopulerT from "../components/PopulerT";
import WhyYCU from "../components/WhyYCU";
import HomeRes from "../components/homeres/HomeRes"
import Dental from '../components/DENTAL/Dental';
import Haz from "../components/haz&omrah/Haz"
const index = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        {/* <Category/> */}
        <AccseesPatner/>
        <Haz/>
        <HomeRes/>
        <WhyYCU/>
        <BookPross/>
        <Dental/>
        {/* <BusnesStat/> */}
        <PopulerT/>
        {/* <Discount/> */}
        <Affiliate/>  
      </Layout>
    </div>
  )
}

export default index 