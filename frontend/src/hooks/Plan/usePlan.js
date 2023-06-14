import { useEffect } from "react";
import { useState } from "react";
import { getAllPlans } from "../../service/plan.service";
import { useCallback } from "react";
import { ConvertToQueryParams } from "~utils";

export const usePlan = (url, clientId, token) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const [error, setError] = useState(null);
  const loadDataPlan = useCallback(async (url, clientId, token) => {
    let res;
    try {
      res = await getAllPlans(ConvertToQueryParams(url), clientId, token);
      if (res.meta.status_code == 200) {
        setData(res.data.result);
        setPagination(res.pagination);
      }
    } catch (error) {
      setError(error);
    }
  }, []);
  useEffect(() => {
    loadDataPlan(url, clientId, token);
  }, [loadDataPlan, url, clientId, token]);
  return { pagination, data, error, executeAllPlans: loadDataPlan };
};
