export const ConvertToQueryParams = (paramsObj) => {
  let query = "";
  for (const key in paramsObj) {
    if (paramsObj[key] !== "") {
      query += key + "=" + paramsObj[key] + "&";
    }
  }
  return query.slice(0, -1) === "" ? "" : "?" + query.slice(0, -1);
};
