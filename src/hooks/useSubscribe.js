import React, { useState } from "react";
import { subscribePlan } from "../services/api.services";
import { showGlobalToast } from "../utils/toastService";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const subscribeToPlan = async (plan) => {
    try {
      setLoading(true);

      const response = await subscribePlan({ planId: plan._id });
      showGlobalToast(response.message, "success");
    } catch (error) {
      console.error(error);
      showGlobalToast(error.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, subscribeToPlan };
};

export default useSubscribe;
