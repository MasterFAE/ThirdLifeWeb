export type User = {
  id?: string;
  username?: string;
  email?: string;
  whitelist?: boolean;
  canApply?: number;
  isAdmin?: number;
  isModerator?: number;
  steam?: string;
  discord?: string;
  loading?: boolean;
};

export type UserAction = {
  type: string;
  payload: any;
};

export type Announcement = {
  id: number;
  title: string;
  description: string;
  userid: string;
  category: string;
  createdAt: Date;
};

export type Update = {
  id: number;
  title: string;
  description: string;
  userid: string;
  createdAt: Date;
};

export type DispatchAction = {
  type: string;
  payload: any;
};
