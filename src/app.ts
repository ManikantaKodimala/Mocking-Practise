import axios from "axios";

export async function isSusscefullCall(url: string) {
  const res = await axios.get(url);
  const data = res.data;
  // console.log(res);

  if (data.status === "success") {
    return true;
  } else return false;
}
