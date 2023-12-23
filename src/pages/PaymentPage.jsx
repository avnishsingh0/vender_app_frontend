import React from "react";

// internal imports
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Payment from "../components/Payment/Payment.jsx";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f9fc]">
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />
      <Payment />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PaymentPage;
