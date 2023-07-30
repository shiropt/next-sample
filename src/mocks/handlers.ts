import { db } from "./db";
import { users } from "./data/user";

users.forEach((user) => {
  db.user.create({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    avatar: user.avatar,
  });
});

export const handlers = [...db.user.toHandlers("rest")];
