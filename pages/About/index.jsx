import React from 'react';
import AboutBaner from "../../components/aboutBaner";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <div>
        <Layout>
            <div className='w-full h-screen'>
                    <AboutBaner text={"About us"}/>
            </div>
        </Layout>
    </div>
  )
}

export default Index    