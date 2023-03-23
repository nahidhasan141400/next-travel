import React from "react";
import Layout from "../../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="pt-24">
        <div className="max-w-7xl mx-auto flex justify-center items-center relative">
          <div className="w-3/4">
            <div className="px-2">
              <h1 className="text-2xl font-semibold">
                <span className="text-logoSun">Refund</span> Policy
              </h1>
             
            </div>
          </div>
          <div className="w-1/4 hidden md:block">
            <img className="h-42 nhFloat" src="/svg/pay.svg" alt="" />
          </div>
        </div>
      </div>
      {/* main section  */}
      <div className="max-w-4xl mx-auto pb-48 pt-24">

        <p className="text-lg font-thin text-justify">
        After the full payment, due to an unforeseen and uncontrollable issue if it is not possible to hand over the product within the stipulated time, the company will notify the customers by phone, SMS, e-mail or other means within 48 hours of the placement of orders. The money has to be refunded in full within a maximum of 72 hours for any delivery failure. Company must not force the clients directly or indirectly to buy any other product in exchange.

If the buyers make the payment in advance through debit and credit cards, bank transfer or mobile banking, the money has to be refunded in full in the same medium the payment was received within a maximum of 10 days for any delivery failure within the stipulated time. In this case, if any charge is applicable, the seller will be responsible to pay for it. The seller will notify the buyers by phone, SMS, e-mail or other means regarding the refund. Moreover, the seller cannot refund more than the amount the buyer has paid earlier. The time line could be relaxed if the buyer fails to receive the product or service in stipulated time.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
