import axios from "axios"

export const postData = async (url, data) => {
  await axios.post(url, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}