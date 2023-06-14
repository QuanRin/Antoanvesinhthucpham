import { useState } from "react";
import { getHomeProducts } from "~service";
import { ConvertToQueryParams } from "~utils";

export const useHomeProduct = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const loadDataProduct = async (url) => {
    let res;
    try {
      setLoading(true);
      res = await getHomeProducts(ConvertToQueryParams(url));
      setData(res.data.result);
      setPagination(res.pagination);
    } catch (error) {
      setError(error);
    } finally {
      if (res !== undefined) {
        setLoading(false);
      }
    }
  };

  return {
    data,
    pagination,
    error,
    loading,
    execute: loadDataProduct,
  };
};
