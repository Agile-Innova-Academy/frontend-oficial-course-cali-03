import useForm from "../Hooks/useForm";
const Register = () => {

  const [datosFormulario, handleChange, reset] = useForm({
    nom: "",
    email: "",
    pass: "",
    tlf: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(datosFormulario);
    reset()
  };


 
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
