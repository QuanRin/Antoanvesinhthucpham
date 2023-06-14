import { updateUser } from "../../service/user.service";
import { useState } from "react";
export const useUpdateUser = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleUpdateUser = async (Obj, id, clientId, token) => {
    let res;
    try {
      res = await updateUser(Obj, id, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccess(true);
        setMessage("Update Success");
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };
  return { success, message, error, loading, execute: handleUpdateUser };
};
