import { useState } from "react";
import { addInspectorToPlan } from "../../service/plan.service";

export const useAddInspectorToPlan = () => {
  const [errorAddInspectorToPlan, setErrorAddInspectorToPlan] = useState("");
  const loadAddInspectorToPlan = async (planId, userId, clientId, token) => {
    let res;
    try {
      res = await addInspectorToPlan(planId, userId, clientId, token);
      //  if(res.meta.status_code==201){
      //     setSuccessEditTimePlan(true)
      //     setMessageEditTimePlan("Updated Plan")
      //  }
    } catch (error) {
      setErrorAddInspectorToPlan(error);
    }
  };
  return {
    errorAddInspectorToPlan,
    executeAddInspectorToPlan: loadAddInspectorToPlan,
  };
};
