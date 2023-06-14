import { deleteUser } from "../../service/user.service";
import { useState } from "react";

export const useDeleteUser = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const deleteCompanyUser = async (id, clientId, token) => {
    let res;
    try {
      res = await deleteUser(id, clientId, token);
      if (res.meta.status_code == 200) {
        setLoading(true);
        setSuccess(true);
        setMessage("Delete Success");
      }
    } catch (error) {
      setError(error);
      setSuccess(false);
    }
  };
  return { message, success, loading, error, execute: deleteCompanyUser };
};
