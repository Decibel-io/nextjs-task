export type ICredentials = {
  username: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
};

export type LoginResponse = {
  access_token: string;
  refreshToken: string;
  user: User;
};

export type ICallResponse = {
  hasNextPage: boolean;
  nodes: ICall[];
  totalCount: number;
};

export type ICall = {
  id: string;
  direction: string;
  from: string;
  to: string;
  duration: number;
  isArchived: boolean;
  callType: string;
  via: string;
  createdAt: string;
  notes: INote[];
};

export type INote = {
  id: string;
  content: string;
};
