import { useState } from "react";
import { loginHandler } from "~service";

export const useLogin = () => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const loadLogin = async (email, password) => {
    let res;
    try {
      res = await loginHandler(email, password);
      if (res.meta.status_code == 200) {
        setSuccess(true);
        setData(data.data);
      }
    } catch (error) {
      setError(error);
    }
  };
  return { data, success, error, executeLogin: loadLogin };
};
