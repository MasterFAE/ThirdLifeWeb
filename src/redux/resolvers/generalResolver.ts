import { GET_UPDATES, GET_ANNOUNCEMENTS } from "../reducers/generalReducer";
import { Announcement, Update, DispatchAction } from "../types";

export const GetAnnouncements = (data: Announcement[]) => {
  return {
    type: GET_ANNOUNCEMENTS,
    payload: data,
  };
};

export const GetUpdate = (data: Update[]) => {
  return {
    type: GET_UPDATES,
    payload: data,
  };
};
