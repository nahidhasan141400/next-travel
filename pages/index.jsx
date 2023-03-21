import AccseesPatner from "../components/AccseesPatner";
import Affiliate from "../components/Affiliate";
import BusnesStat from "../components/BusnesStat";
// import Category from "../components/category";
import Discount from "../components/Discount";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import PopulerT from "../components/PopulerT";
import WhyYCU from "../components/WhyYCU";

const index = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        {/* <Category/> */}
        <AccseesPatner/>
        <PopulerT/>
        <WhyYCU/>
        <BusnesStat/>
        <Discount/>
        <Affiliate/>  
      </Layout>
    </div>
  )
}

export default index