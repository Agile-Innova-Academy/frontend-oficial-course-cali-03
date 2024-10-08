import axios from "axios";

export const PostData = async (url, obj) => {
  try {
    const resp = await axios.post(url, obj);
    return resp
  } catch (error) {
    console.log(error);
  }
};

export const GetData = async (url) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
