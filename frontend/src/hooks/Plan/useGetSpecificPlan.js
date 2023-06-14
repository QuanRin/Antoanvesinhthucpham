import { useState } from "react";
import { getSpecificPlan } from "../../service/plan.service";
export const useGetSpecific = () => {
  const [dataGetSpecificPlan, setDataGetSpecificPlan] = useState({});
  const [successGetSpecificPlan, setSuccessGetSpecificPlan] = useState(false);

  const [errorGetSpecificPlan, setErrorGetSpecificPlan] = useState(null);
  const loadSpecificPlan = async (id, clientId, token) => {
    let res;
    try {
      res = await getSpecificPlan(id, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessGetSpecificPlan(true);
        setDataGetSpecificPlan(res.data.result);
      }
    } catch (error) {
      setErrorGetSpecificPlan(error);
    }
  };
  return {
    dataGetSpecificPlan,
    errorGetSpecificPlan,
    successGetSpecificPlan,
    executeGetSpecificPlan: loadSpecificPlan,
  };
};
