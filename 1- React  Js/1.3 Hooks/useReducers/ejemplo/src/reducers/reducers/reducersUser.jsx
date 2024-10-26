import { typeUser } from "../types/type";

const initialState = {}
const reducersUser = (state= initialState, action) => {
  switch (action.type) {
    case typeUser.login:
      return { ...action.payload, logged: true };
    
    case typeUser.logout:
      return { logged: false };
    
    default:
     return state
  }
}

export default reducersUser