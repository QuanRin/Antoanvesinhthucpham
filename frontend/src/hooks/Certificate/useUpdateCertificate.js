import { useState } from "react";
import { updateCertificate } from "../../service/certificate.service";

export const useUpdateCertificate = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const certificateUpdate = async (Obj, clientId, token) => {
    let res;
    try {
      res = await updateCertificate(Obj, clientId, token);
      setSuccess(true);
      setMessage("Update Certificate Success");
    } catch (error) {
      setSuccess(false);
      setError(error);
    }
  };
  return {
    message,
    loading,
    success,
    error,
    executeUpdateCerti: certificateUpdate,
  };
};
