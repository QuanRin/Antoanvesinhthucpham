export const ConvertTimestampToDate = (timestamp) => {
  // Tạo một đối tượng Date từ timestamp
  var date = new Date(timestamp);

  // Lấy các thành phần của ngày, tháng và năm
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  // Lấy các thành phần của giờ và phút
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);

  // Tạo chuỗi định dạng yyyy-MM-ddThh:mm
  var dateTimeLocal =
    year + "-" + month + "-" + day + "T" + hours + ":" + minutes;

  return dateTimeLocal;
};
