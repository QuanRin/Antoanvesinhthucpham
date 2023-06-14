import { useState } from "react";
import { resetPassword } from "~service";

export const useResetPassword = () => {
  const [successResetPassword, setSuccessResetPassword] = useState(false);
  const [errorResetPassword, setErrorResetPassword] = useState("");
  const [statusCode, setStatusCode] = useState();
  const loadResetPassword = async (
    oldPassword,
    newPassword,
    clientId,
    token
  ) => {
    let res;
    try {
      res = await resetPassword(oldPassword, newPassword, clientId, token);
      if (res.meta.status_code == 200) {
        setSuccessResetPassword(true);
        setStatusCode(200);
      }
      if (res.meta.status_code == 401) {
        setSuccessResetPassword(false);
        setStatusCode(401);
      }
    } catch (error) {
      setErrorResetPassword(error);
    }
  };
  return {
    statusCode,
    successResetPassword,
    errorResetPassword,
    executeResetPassord: loadResetPassword,
  };
};
