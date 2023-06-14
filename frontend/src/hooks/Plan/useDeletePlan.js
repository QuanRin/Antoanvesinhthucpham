import { useState } from "react";
import { deletePlan } from "../../service/plan.service";
export const useDeletePlan = () => {
  const [errorDeletePlan, setErrorDeletePlan] = useState(null);
  const loadDeletePlan = async (planId, clientId, token) => {
    let res;
    try {
      res = await deletePlan(planId, clientId, token);
    } catch (error) {
      setErrorDeletePlan(error);
    }
  };
  return { errorDeletePlan, executeDeletePlan: loadDeletePlan };
};
