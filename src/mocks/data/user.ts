import { faker } from "@faker-js/faker";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
};

export const users: User[] = [...Array(10)].map((_, index) => ({
  id: index + 1,
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  avatar: faker.image.avatar(),
}));
