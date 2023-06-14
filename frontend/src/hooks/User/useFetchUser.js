import { useEffect, useState, useCallback } from "react";
import { getAllUser } from "../../service/user.service";
import { ConvertToQueryParams } from "../../utils/ConvertToQueryParams";

export const useFetchUser = (url, clientId, token) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const loadData = useCallback(async (url, clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await getAllUser(ConvertToQueryParams(url), clientId, token);
      setData(res.data.result);
      setPagination(res.pagination);
    } catch (error) {
      setError(error);
    } finally {
      if (res !== undefined) {
        setLoading(false);
      }
    }
  }, []);
  useEffect(() => {
    loadData(url, clientId, token);
  }, [loadData, url, clientId, token]);

  return {
    data,
    pagination,
    error,
    loading,
    executeDataUser: loadData,
  };
};
