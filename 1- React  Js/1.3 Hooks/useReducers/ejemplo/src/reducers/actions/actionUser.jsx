import { typeUser } from "../types/type"

export const actionLogin =(payload)=>{
    return {
        type: typeUser.login,
       payload
    }
}

export const actionLogout  = () => {
  return {
    type: typeUser.logout,

  };
};

export const actionAdd = (payload) => {
  return {
    type: typeUser.add,
    payload,
  };
};