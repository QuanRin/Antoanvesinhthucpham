import { useState } from "react";

import { inactivePost } from "../../service/post.service";
export const useDeletePost = () => {
  const [errorDeletePlan, setErrorDeletePlan] = useState(null);
  const [success, setSuccess] = useState(false);
  const loadDeletePost = async (id, clientId, token) => {
    let res;
    try {
      res = await inactivePost(id, clientId, token);
      if (res.meta.status_code == 201) {
        setSuccess(true);
      }
    } catch (error) {
      setErrorDeletePlan(error);
    }
  };
  return { success, errorDeletePlan, executeDelete: loadDeletePost };
};
