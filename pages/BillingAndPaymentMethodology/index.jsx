import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
const Index = () => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 w-full flex flex-col items-center justify-end md:justify-center">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl font-bold">
              Billing and <span className="text-logoSun">payment</span>{" "}
              methodology
            </h1>
            <p className="mt-4 text-base font-thin ">
              Billing and payment policy will be decided upon mutual
              understanding. VAT, Tax charges and Ticket Refund policies are
              subject to depends on government and aviation/Airliner regulation.
            </p>
            <div className="mt-8">
                <Link href={"/contact"}>
                    <button type="button" className="px-8 py-3 font-semibold rounded-full bg-logoSun ">Contact us</button>
                </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full ">
          <img
            className="h-96 object-contain h-96 nhFloat"
            src="/svg/payment.svg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
