import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { getAllProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useProduct = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const loadData = useCallback(async (url, clientId, token) => {
    let res = {};
    try {
      setLoading(true);
      res = await getAllProducts(ConvertToQueryParams(url, clientId, token));
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
    loadData();
  }, [loadData, url]);

  return {
    data: { items: data, pagination },
    error,
    loading,
    execute: loadData,
  };
};
