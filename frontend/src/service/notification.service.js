import { Axios } from "~config";
export const getAllNotifications = async (query, clientId, token) => {
  return Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN: token,
      client_id: clientId,
    },
    url: "/notifications" + query,
  });
};
