import { typeCounter } from "../types/type"

export const actionIncrement = (valor)=>{
    return {
        type: typeCounter.increment,
        payload: valor
    }
}


export const actionDecrement = (valor) => {
  return {
    type: typeCounter.decrement,
    payload: valor,
  };
};


export const actionReset = () => {
  return {
    type: typeCounter.reset,
  };
};