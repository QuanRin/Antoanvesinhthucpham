import { useState } from "react";
import { getPlanDocx } from "../../service/plan.service";

export const useGetPlanDocx = () => {
  const [dataGetPlanDocx, setDataGetPlanDocx] = useState({});
  const [successGetPlanDocx, setSuccessGetPlanDocx] = useState(false);
  const [messageGetPlanDocx, setMessageGetPlanDocx] = useState("");
  const [errorGetPlanDocx, setErrorGetPlanDocx] = useState(null);
  const loadDocxPlan = async (planId, clientId, token) => {
    let res;
    try {
      res = await getPlanDocx(planId, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessGetPlanDocx(true);
        setDataGetPlanDocx(res.data.result);
      }
    } catch (error) {
      setErrorGetPlanDocx(error);
    }
  };
  return {
    dataGetPlanDocx,
    successGetPlanDocx,
    messageGetPlanDocx,
    errorGetPlanDocx,
    executeGetDocxPlan: loadDocxPlan,
  };
};
