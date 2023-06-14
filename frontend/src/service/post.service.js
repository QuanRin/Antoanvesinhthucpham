import { Axios } from "~config";

export const getAllPost = async (query, clientId, token) => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    // withCredentials: true,
    url: "/private/adm/posts" + query,
  });
};
export const inactivePost = async (id, clientId, token) => {
  return await Axios({
    method: "DELETE",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    // withCredentials: true,
    url: "/private/adm/posts?id=" + id,
  });
};
