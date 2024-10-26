import React, { memo, useContext, useMemo } from "react";
import { procesoPesado } from "../helpers/procesoPesado";
import { UserContext } from "../context/ContextPrueba";

const Home = () => {
  console.log("Estoy en el Home");

  //-------llamar al context / user------------//
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const result = useMemo(() => procesoPesado(500), []);
  return (
    <div>
      <h1>Home de Memorización useMemo</h1>
      <button
        onClick={() =>
          setUser({
            nombre: "Maria",
            email: "maria@gmail.com",
            pass: "123456",
          })
          
        }
      >
        cambiar user
      </button>
      <h3>proceso Pesado: {result} </h3>
    </div>
  );
};

export default Home;
