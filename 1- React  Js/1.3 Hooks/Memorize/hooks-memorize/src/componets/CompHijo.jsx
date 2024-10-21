import React, { memo, useContext } from "react";
import { UserContext } from "../context/ContextPrueba";

const CompHijo = ({ text, count, increment }) => {
  console.log("Estoy en el Componete Hijo", text, count);
  const { user, setUser } = useContext(UserContext);

  console.log(user)
  return (
    <div>
      <h3>{text}</h3>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default memo(CompHijo);
