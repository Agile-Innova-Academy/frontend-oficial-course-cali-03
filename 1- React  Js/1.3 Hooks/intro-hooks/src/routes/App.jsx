import Counter from "../componets/Counter";
import Login from "../componets/Login";
import Register from "../componets/Register";

function App() {
  return (
    <>
      <h1 className="title">Hooks</h1>
      <Counter />
      <br></br>
      <hr></hr>
      <h1>Registro de Usuario</h1>
      <Register />
      <br></br>
      <hr></hr>
      <h1>Login</h1>
      <Login />
    </>
  );
}

export default App;
