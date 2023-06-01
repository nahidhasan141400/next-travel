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
                Dear Visitors, If you need more information about our tour services or have any other queries, we invite you to submit your queries, and our dedicated team at Sun Holidays Ltd will respond to you.
                </p>
        </div>
        <div className="w-full relative px-2">
              <Form/>
        </div>
    </Layout>
  )
}

export default index