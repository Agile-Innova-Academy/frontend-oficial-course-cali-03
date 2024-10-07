import { useState, useEffect} from "react";
const Counter = () => {
  const [stateCount, setStateCount] = useState(0);
  const [user, setUser] = useState({
    name: "Derly",
    edad: "24",
    email: "derly@gmail.com",
  });
  const [active, setActive]= useState(false)

  const cambiarNombre =()=>{
    setActive(!active)
    setUser(
            {name: "Yudith",
    edad: "36",
    email: "yuditj@gmail.com",}
    )
  }
  console.log(user)

  // Efeccto
  useEffect(() => {
    console.log("Entre al effecto", active );
  }, [active]);
  

    return (
    <div>
      <button onClick={cambiarNombre}>Otro User {user.name}</button>
      <div>
        <h1>Contador: {stateCount}</h1>
      </div>
      <button onClick={() => setStateCount(stateCount + 1)}>+1</button>
      <button onClick={() => setStateCount(0)}>0</button>
      <button onClick={() => setStateCount(stateCount - 1)}>-1</button>
    </div>
  );
};

export default Counter;
