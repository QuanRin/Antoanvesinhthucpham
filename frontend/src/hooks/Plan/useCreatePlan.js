import { useState } from "react";
import { addNewPlan } from "../../service/plan.service";
export const useCreatePlan = () => {
  const [successAddNewPlan, setSuccessAddNewPlan] = useState(false);
  const [messageAddNewPlan, setMessageAddNewPlan] = useState("");
  const [errorAddNewPlan, setErrorAddNewPlan] = useState(null);
  const loadAddNewPlan = async (Obj, clientId, token) => {
    let res;
    try {
      res = await addNewPlan(Obj, clientId, token);
      if (res.meta.status_code == 200 || res.meta.status_code == 201) {
        setSuccessAddNewPlan(true);
        setMessageAddNewPlan("Added New Plan");
      }
    } catch (error) {
      setErrorAddNewPlan(error);
    }
  };
  return {
    successAddNewPlan,
    messageAddNewPlan,
    errorAddNewPlan,
    executeAddPlan: loadAddNewPlan,
  };
};
