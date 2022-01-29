import { Announcement, Update, DispatchAction } from "../types";

export const GET_ANNOUNCEMENTS = "GET_ANNOUNCEMENTS";
export const GET_UPDATES = "GET_UPDATES";

const initialState = {
  announcements: [],
  updates: [],
};

const generalReducer = (state = initialState, action: DispatchAction) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      state.announcements = action.payload;
      console.log(action.payload);

      return { ...state };
    case GET_UPDATES:
      state.updates = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default generalReducer;
