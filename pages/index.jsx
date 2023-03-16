import BusnesStat from "../components/BusnesStat";
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
        <PopulerT/>
        <WhyYCU/>
        <BusnesStat/>
      </Layout>
    </div>
  )
}

export default index