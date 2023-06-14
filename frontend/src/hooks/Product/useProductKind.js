import { useEffect } from "react";
import { useState } from "react";
import { getAllProductKind } from "../../service/product.service";

export const useProductKind = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let res;
    (async () => {
      try {
        res = await getAllProductKind();
        if (res.meta.status_code == 200) {
          setData(res.data.result);
          setSuccess(true);
          setLoading(false);
          setMessage("Create New Product Success");
        }
      } catch (error) {
        setError(error);
        setSuccess(false);
      }
    })();
  }, []);
  return { message, success, data, loading, error };
};
