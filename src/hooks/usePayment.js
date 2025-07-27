import React, { useState } from "react";
import {
  capturePaypalOrder,
  createPaypalOrder,
} from "../services/api.services";
import { navigate } from "../utils/navigator";
import { showGlobalToast } from "../utils/toastService";
import { rootPath } from "../App";
import { useDispatch } from "react-redux";
import { updatePaymentState, updateUser } from "../redux/slices/auth.slice";

const usePayment = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handlePaypalPayment = async (paymentDetails) => {
    try {
      setLoading(true);
      const response = await createPaypalOrder(paymentDetails);
      if (response?.link) {
        dispatch(updatePaymentState(true));
      }
      window.location.href = response.link;
    } catch (error) {
      console.error("Payment error:", error);

      showGlobalToast(
        error.response?.data?.message || "Payment failed",
        "error"
      );
      throw error; // Re-throw the error for further handling
    } finally {
      setLoading(false);
    }
  };
  const handlePaymentSuccess = async (body) => {
    try {
      setLoading(true);
      const response = await capturePaypalOrder(body);
      showGlobalToast(
        response?.message || "Payment made successfully",
        "success"
      );

      if (response) dispatch(updateUser({ subscription: true }));

      // Optionally, you can navigate to a success page or show a success message
      navigate(rootPath);
    } catch (error) {
      console.error("Error capturing payment:", error);
      showGlobalToast(
        error.response?.data?.message || "Payment capture failed"
      );
      // navigate("/cancel");
      throw error; // Re-throw the error for further handling
    } finally {
      setLoading(false);
      if (response?.link) {
        dispatch(updatePaymentState(false));
      }
    }
  };
  return { handlePaypalPayment, handlePaymentSuccess, loading };
};

export default usePayment;
