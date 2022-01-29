import { User, UserAction } from "../types";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOFF_USER = "LOGOFF_USER";

const userReducer = (state: User = { loading: true }, action: UserAction) => {
  switch (action.type) {
    case LOGIN_USER:
      var { id, whitelist, username, canApply, isAdmin, isModerator, steam, discord } = action.payload;
      whitelist === 0 ? (whitelist = false) : (whitelist = true);
      return { ...state, id, username, whitelist, canApply, isAdmin, isModerator, steam, discord, loading: false };
    case LOGOFF_USER:
      return { loading: false };
    // return { ...state, id: null, username: null, whitelist: null, email: null };
    default:
      return state;
  }
};

export const getUser = (state: { user: User }) => state.user;

export default userReducer;
