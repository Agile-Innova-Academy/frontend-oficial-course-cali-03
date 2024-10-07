import useForm from "../Hooks/useForm";

const Login = () => {
  const [datosFormulario, handleChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(datosFormulario);
    reset();
  };
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
      </div>
    </div>
  );
};

export default Login;
