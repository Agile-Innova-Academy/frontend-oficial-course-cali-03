import { useState } from "react";
import { uploadFile } from "../helpers/uploadFile";
import useForm from "../Hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { urlUser } from "../helpers/urls";
import { PostData } from "../helpers/peticiones";
import Swal from "sweetalert2";
import { DivContainer, FormStyle } from "../styles/Styled";
const Register = () => {
  const [activeImg, setActiveImg] = useState(true);
  const [Img, setImg] = useState("");
  const navigate = useNavigate();
  const [datosFormulario, handleChange, reset, handleUpload] = useForm({
    nom: "",
    email: "",
    pass: "",
    tlf: "",
    imagen: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const obj = {
      nom: datosFormulario.nom,
      email: datosFormulario.email,
      pass: datosFormulario.pass,
      tlf: datosFormulario.tlf,
      imagen: datosFormulario.imagen,
    };
    const resp = await PostData(urlUser, obj);
    console.log(resp);
    if (resp.status === 201) {
      Swal.fire("Usuario Registrado con Exito!");
      // enrutamiento hacia inicio de sesión
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal",
      });
    }

    reset();
  };

  const handleUploadImagen = (e) => {
    console.log(e);
    const file = e.target.files[0];
    uploadFile(file).then((resp) => {
      handleUpload(resp);
      setImg(resp);
      setActiveImg(false);
    });
  };

  return (
    <DivContainer>
      <FormStyle onSubmit={handleSubmit}>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Ingrese Nombre"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese Email"
          onChange={handleChange}
        />
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Ingrese Password"
          onChange={handleChange}
        />
        <input
          type="text"
          id="tlf"
          name="tlf"
          placeholder="Ingrese teléfono"
          onChange={handleChange}
        />
        <input
          type="file"
          id="imagen"
          name="imagen"
          onChange={handleUploadImagen}
        />
        {!activeImg && (
          <div>
            <img src={Img} alt="" style={{ width: 50 }} />
            <button type="submit">Registrar</button>
          </div>
        )}
      </FormStyle>
      <p>
        ¿Ya tienes Cuenta?<Link to="/">Inicia sesión aquí</Link>
      </p>
    </DivContainer>
  );
};

export default Register;
