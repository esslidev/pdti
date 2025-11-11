import type { Proposition } from "./proposition";

export type Visitor = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  propositions: Proposition[];
  createdAt: Date;
  updatedAt: Date;
};
