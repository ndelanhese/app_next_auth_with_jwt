export type AuthContextProps = {
  userState: UserProps | null;
  isAuthenticated: boolean;
  signIn: (data: SignIntProps) => Promise<boolean>;
};

export type SignIntProps = {
  email: string;
  password: string;
};

export type UserProps = {
  name: string;
  email: string;
  avatar_url: string;
};

export type ChildrenProps = {
  children: JSX.Element;
};
