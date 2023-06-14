import axios from "axios";
import Axios from "../config/axios.config";
export const getAllBusinessType = async () => {
  return await Axios({
    method: "GET",
    headers: {
      ACCESS_TOKEN:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiQURNIiwiaXNzIjoibWluaG5nb2MiLCJleHAiOjE2ODIzNTEzNDUsImlhdCI6MTY4MjM1MTA0NSwidXNlcklkIjoiMTBSMmgteF8zS0NfOFJPNGRBWjNIMnEifQ.ItDTU8hySe5ayEFSUg1eSa5-pUDqAokxMSk2dyMQlW965BZ9OcW5qyZgEcgPg6Yjodo9XymFxYgzDwLy42VlonIgn7TtIH66Y9AyaTTCL46rkfYnoU6GB8V6OJQzGw8wKot98qsCQgGvinZ_43_CAJlVPdRSCByjQjag-htAGKUiXEvKZ9eZveGDai4ru6pR16Lt1FN1ngUWe3DnXIcBDTZo8Pb0HdDSnuY9ff9-lHKqEksg5wNozVbc0jBw8_G1mR1H_Fs58Ahbxr3Ou6-cEaKDoW55IJTFRpS3fuBf_kRQ8h1GyS7ionY71nzgdA7GkFVCINH4EqEykGVKslax_g",
    },
    url: "/business",
  });
};
