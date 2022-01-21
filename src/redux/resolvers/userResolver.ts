import { LOGIN_USER, LOGOFF_USER } from "../reducers/userReducer";
import { User } from "../types";

export const LogIn = (data: User) => {
  return {
    type: LOGIN_USER,
    payload: data,
  };
};
export const LogOff = () => {
  return {
    type: LOGOFF_USER,
  };
};
