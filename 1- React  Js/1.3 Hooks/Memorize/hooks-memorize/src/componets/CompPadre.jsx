import React, { useCallback, useState } from "react";
import Home from "./Home";
import CompHijo from "./CompHijo";

const CompPadre = () => {
  console.log("Estoy en el Componete Padre");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const handleCount3 = useCallback(() => {
    setCount3(count3 + 1);
  }, [count3]);
 

  return (
    <div>        
      <Home />
      <CompHijo text="Contador 0" count={count} increment={handleCount} />
      <CompHijo text="Contador 1" count={count1} increment={handleCount1} />
      <CompHijo text="Contador 2" count={count2} increment={handleCount2} />
      <CompHijo text="Contador 3" count={count3} increment={handleCount3} />
    </div>
  );
};

export default CompPadre;
