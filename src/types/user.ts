import { Roles } from "./roles";

export type User = {
  name: string;
  cpf: string;
  email: string;
  photo: string;
  role: Roles;
  created_at: Date;
};
