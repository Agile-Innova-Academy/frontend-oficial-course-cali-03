import axios from "axios";

export const patchData = async (url, id, obj) => {
  await axios.patch(`${url}/${id}`, obj)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
