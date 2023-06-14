import { useState } from "react";
import { createCompanyUser, createUser } from "../../service/user.service";

export const useCreateCompany = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState();

  const createCompany = async (Object, id, token) => {
    let res;
    try {
      res = await createCompanyUser(Object, id, token);
      if (res.meta.status_code == 201) {
        setMessage("Add New Company Success");
        setStatusCode(201);
      }
      if (res.meta.status_code == 409) {
        setMessage(res.meta.error);
        setStatusCode(409);
      }
    } catch (error) {
      setError(error);
    }
  };
  return { statusCode, message, error, execute: createCompany };
};
export const useCreateUser = () => {
  //   const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const [statusCode, setStatusCode] = useState();
  const createUserAdmin = async (Object, clientId, token) => {
    let res;
    try {
      res = await createUser(Object, clientId, token);
      if (res.meta.status_code == 201) {
        setMessage("Add New User Success");
        setStatusCode(201);
      }
      if (res.meta.status_code == 409) {
        setStatusCode(409);
        setMessage(res.meta.error);
      }
    } catch (error) {
      setError(error);
    }
  };

  return { statusCode, message, error, execute: createUserAdmin };
};
