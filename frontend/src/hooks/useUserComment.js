import { useState } from "react";
import { userComment } from "../service/user.service";
export const useUserComment = (Obj) => {
  // const [success,setSuccess]= useState(false)
  // const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loadUserComment = async (Obj) => {
    let res;
    try {
      res = await userComment(Obj);
    } catch (error) {
      setError(error);
    }
  };
  return { error, executeUserComment: loadUserComment };
};
