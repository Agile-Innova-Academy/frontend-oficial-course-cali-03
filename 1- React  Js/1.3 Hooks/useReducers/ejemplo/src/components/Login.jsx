import React, { useContext, useEffect, useState } from 'react'
import useForm from '../hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import { GetData } from '../helpers/peticiones';
import Swal from 'sweetalert2';
import { urlUser } from '../helpers/urls';
import { AuthContext } from '../context/AuthContext';
import { actionLogin } from '../reducers/actions/actionUser';
const Login = () => {

  const {dispatch} = useContext(AuthContext)

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
    dispatch(actionLogin(respFind)); 
    Swal.fire("Bienvenido");
     navigate("/");
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
    <div>
      {" "}
      <div>
        <form onSubmit={handleSubmit}>
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
        </form>
        <p>
          ¿No tienes Cuenta?<Link to="/register">Registrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Login