import { useCallback } from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useAdminProduct = (url, clientId, token) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const loadDataProduct = useCallback(async (url, clientId, token) => {
    console.log("ttt", clientId, token);
    let res;
    try {
      setLoading(true);
      res = await getAllProducts(ConvertToQueryParams(url), clientId, token);
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
    loadDataProduct(url, clientId, token);
  }, [loadDataProduct, url, clientId, token]);

  return {
    data,
    pagination,
    error,
    loading,
    executeDataProduct: loadDataProduct,
  };
};
