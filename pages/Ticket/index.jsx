import Link from 'next/link';
import React from 'react';
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
        <div className='w-full h-screen flex justify-center items-center'>
          <div className='text-center'>
            <h1 className='text-2xl capitalize mb-2'>Our E-ticketing Service is Offline Now</h1>
            <p className='font-light italic capitalize'> contact us for get ticket service</p>
            <Link href={'/contact'}>
              <button className='btn btn-primary mt-8'> Contact With Us </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Index