import { Link, useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";
import { useEffect, useState } from "react";
import { GetData } from "../helpers/peticiones";
import { urlUser } from "../helpers/urls";
import Swal from "sweetalert2";
import { DivContainer, FormStyle } from "../styles/Styled";

const Login = () => {
  const [datosFormulario, handleChange, reset] = useForm({
    email: "",
    pass: "",
  });
  const [datosUser, setDatosUser] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datosFormulario);
    //----------busqueda del email y pass
    const respFind = datosUser?.find(
      (fi) =>
        fi.email === datosFormulario.email && fi.pass === datosFormulario.pass
    );
    console.log(respFind);
    if (respFind !== undefined) {
      Swal.fire("Bienvenido");
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "usuario No registrado",
      });
    }

    reset();
  };

  useEffect(() => {
    async function carga() {
      const users = await GetData(urlUser);
      setDatosUser(users);
    }
    carga();
  }, []);

  return (
    <DivContainer>
      {" "}
      <div>
        <FormStyle onSubmit={handleSubmit}>
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

          <button type="submit">Iniciar Sesión</button>
        </FormStyle>
        <p>
          ¿No tienes Cuenta?<Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </DivContainer>
  );
};

export default Login;
