import React, { useReducer } from 'react'
import reducersCount from '../reducers/reducers/reducersCount';
import { actionDecrement, actionIncrement, actionReset } from '../reducers/actions/actionsCounter';

const init=()=>{
    return { count: 0 };
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducersCount, {}, init)
     console.log(state)
     
  return (
    <div>
      <p>Contador: {state.count} </p>
      <button onClick={()=> dispatch(actionIncrement(2))}>Incrementar</button>
      <button onClick={()=> dispatch(actionReset())}>Reset</button>
      <button onClick={()=>dispatch(actionDecrement(2))}>Decrementar</button>
    </div>
  );
}

export default Counter