import React, { useState } from "react";
import { subscribePlan } from "../services/api.services";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const subscribeToPlan = async (plan) => {
    try {
      setLoading(true);
      console.log(plan);
      const response = await subscribePlan({ planId: plan._id });
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, subscribeToPlan };
};

export default useSubscribe;
