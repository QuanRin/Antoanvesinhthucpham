import { useState } from "react";
import { companyRegister } from "../../service/user.service";

export const useCompanyRegister = () => {
  // const [success,setSuccess]= useState(false)
  // const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState("");
  const loadCompanyRegister = async (Obj) => {
    let res;
    try {
      res = await companyRegister(Obj);
    } catch (error) {
      setErrorRegister(error);
    }
  };
  return { errorRegister, executeCompanyRegister: loadCompanyRegister };
};
