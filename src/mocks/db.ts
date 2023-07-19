import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
    password: String,
    avatar: String,
  },
});
