export const ConvertToTimeStamp = (datetime) => {
  const dateObj = new Date(datetime);
  const timestamp = dateObj.getTime() / 1000;
  return timestamp;
};
