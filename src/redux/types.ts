export type User = {
  id?: string;
  username?: string;
  email?: string;
  whitelist?: boolean;
};

export type UserAction = {
  type: string;
  payload: any;
};
