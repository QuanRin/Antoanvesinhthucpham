import { useState } from "react";
import { submitDocx } from "../../service/plan.service";
export const useSubmitDocx = () => {
  const [successSubmitDocx, setSuccessSubmitDocx] = useState(false);
  const [statusCode, setStateCode] = useState();
  const [errorSubmitDocx, setErrorSubmitDocx] = useState(null);
  const loadSubmitDocx = async (planId, filePath, clientId, token) => {
    let res;
    try {
      res = await submitDocx(planId, filePath, clientId, token);
      console.log("res", res);
      setStateCode(res.meta.status_code);
    } catch (error) {
      setErrorSubmitDocx(error);
    }
  };
  return {
    statusCode,
    errorSubmitDocx,
    successSubmitDocx,
    executeSubmitDocx: loadSubmitDocx,
  };
};
