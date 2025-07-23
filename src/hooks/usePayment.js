import React, { useState } from "react";
import {
  capturePaypalOrder,
  createPaypalOrder,
} from "../services/api.services";

const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const handlePaypalPayment = async (paymentDetails) => {
    try {
      setLoading(true);
      const response = await createPaypalOrder(paymentDetails);
      console.log("Payment response:", response);
      window.location.href = response.link;

      console.log("Payment details:", paymentDetails);
    } catch (error) {
      console.error("Payment error:", error);
      throw error; // Re-throw the error for further handling
    } finally {
      setLoading(false);
    }
  };
  const handlePaymentSuccess = async (body) => {
    try {
      setLoading(true);
      const response = await capturePaypalOrder(body);
      navigate("/");
    } catch (error) {
      console.error("Error capturing payment:", error);
      throw error; // Re-throw the error for further handling
    } finally {
      setLoading(false);
    }
  };
  return { handlePaypalPayment, handlePaymentSuccess, loading };
};

export default usePayment;
