import { useState } from "react";
import { editTimeOfPlan } from "../../service/plan.service";
export const useEditTimePlan = () => {
  const [successEditTimePlan, setSuccessEditTimePlan] = useState(false);
  const [messageEditTimePlan, setMessageEditTimePlan] = useState("");
  const [errorEditTimePlan, setErrorEditTimePlan] = useState(null);
  const loadEditTimePlan = async (time, planId, clientId, token) => {
    let res;
    try {
      res = await editTimeOfPlan(time, planId, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccessEditTimePlan(true);
        setMessageEditTimePlan("Updated Plan");
      }
    } catch (error) {
      setErrorEditTimePlan(error);
    }
  };
  return {
    successEditTimePlan,
    messageEditTimePlan,
    errorEditTimePlan,
    executeEditTimePlan: loadEditTimePlan,
  };
};
