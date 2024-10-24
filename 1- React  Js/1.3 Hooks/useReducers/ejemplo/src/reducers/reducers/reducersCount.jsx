import { typeCounter } from "../types/type";

const initialState ={count: 0}
const reducersCount = (state = initialState, action) => {
    switch (action.type) {
      case typeCounter.increment:
        return {count: state.count + action.payload}
        break;
      case typeCounter.decrement:
         return { count: state.count - action.payload };
        break;
      case typeCounter.reset:
         return initialState
        break;
      default:
       return state
    }
};

export default reducersCount