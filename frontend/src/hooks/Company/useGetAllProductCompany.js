import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { companyGetAllProduct } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useGetAllProductCompany = (url, clientId, token) => {
  //   console.log(clientId);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const loadDataProductCompany = useCallback(async (url, clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await companyGetAllProduct(
        ConvertToQueryParams(url),
        clientId,
        token
      );
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
    loadDataProductCompany(url, clientId, token);
  }, [loadDataProductCompany, url, clientId, token]);

  return {
    pagination,
    data,
    error,
    loading,
    execute: loadDataProductCompany,
  };
};
