import axios from "axios"
import Swal from "sweetalert2";

export const postData = async (url, data) => {
  const isNewUser = typeof data.favorites === 'object' ? "Usuario Creado Exitosamente" : "Tu personaje ha sido añadido"
  await axios.post(url, data)
    .then(function (response) {
      if (response && response.status === 201) {
        Swal.fire({
          icon: "success",
          title: isNewUser,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}