import axios from "axios";
import { useState } from "react";
import { createCertificate } from "../../service/certificate.service";

export const useCreateCertificate = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadDataCreateCertificate = async (Obj, clientId, token) => {
    let res;
    try {
      setLoading(true);
      res = await createCertificate(Obj, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccess(true);
        setMessage("Add New Certificate Success");
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };
  return {
    success,
    message,
    error,
    loading,
    execute: loadDataCreateCertificate,
  };
};
