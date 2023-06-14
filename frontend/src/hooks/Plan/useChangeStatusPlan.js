import { useState } from "react";
import { changeStatusPlan } from "../../hooks/Plan/";

export const useChangeStatusPlan = () => {
  const [successChangeStatusPlan, setSuccessChangeStatusPlan] = useState(false);
  const [messageChangeStatusPlan, setMessageChangeStatusPlan] = useState("");
  const [errorChangeStatusPlan, setErrorChangeStatusPlan] = useState(null);
  const loadChangeSDtatusPlan = async (planId) => {
    let res;
    try {
      res = await changeStatusPlan(planId);
      if (res.meta.status_code == 200) {
        setSuccessChangeStatusPlan(true);
        setMessageChangeStatusPlan();
      }
    } catch (error) {
      setErrorChangeStatusPlan(error);
    }
  };
  return {
    successChangeStatusPlan,
    messageChangeStatusPlan,
    errorChangeStatusPlan,
    executeChangeStatusPlan: loadChangeSDtatusPlan,
  };
};
