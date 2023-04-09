import React from 'react';
import Layout from "../../components/Layout";
import Form from "../../components/QueryForm/Form";

const index = () => {
  return (
    <Layout>
        <div className='w-full max-w-7xl py-16 pt-24 mx-auto '>
                <div className='w-full p-10 bg-logoSun rounded-md text-center'>
                    <h1 className='text-2xl font-bold'>Make A Query About Any Trip</h1>
                </div>
                <p className='mt-5 px-10'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque et vero provident, sed quas eligendi quis doloribus voluptates ab, non quaerat deserunt, veniam repellat labore pariatur. Hic asperiores cum nihil!
                </p>
        </div>
        <div className="w-full relative">
              <Form/>
        </div>
    </Layout>
  )
}

export default index