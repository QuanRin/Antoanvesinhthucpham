import React from "react";
import { useState, useCallback, useEffect } from "react";
import { getAllPost } from "../../service/post.service";
import { ConvertToQueryParams } from "~utils";
export const useGetAllPosts = (url, clientId, token) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [success, setSuccess] = useState(false);
  const loadData = useCallback(async (url, clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await getAllPost(ConvertToQueryParams(url), clientId, token);
      if (res.meta.status_code == 200) {
        setData(res.data.result);
        setPagination(res.pagination);
        setSuccess(true);
      }
    } catch (error) {
      setError(error);
    }
  }, []);
  useEffect(() => {
    loadData(url, clientId, token);
  }, [loadData, url, clientId, token]);

  return {
    pagination,
    data,
    success,
    error,
    loading,
    execute: loadData,
  };
};
