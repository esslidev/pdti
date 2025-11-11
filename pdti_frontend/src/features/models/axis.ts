import type { Proposition } from "./proposition";

export type Axis = {
  id: string;
  givenId: string;
  name: string;
  title: string;
  imageUrl: string;
  propositions: Proposition[];
  createdAt: Date;
  updatedAt: Date;
};
