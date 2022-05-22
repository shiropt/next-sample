/* eslint-disable react-hooks/rules-of-hooks */
import { useFetchers } from "./../hooks/useFetcher";
import { devtools } from "zustand/middleware";
import create from "zustand";
import { PostModel } from "../models/post";
import { API } from "../utils/path";

interface State {
  posts: PostModel[];
  fetchPosts: () => void;
}
const { getData } = useFetchers();

export const useStore = create<State>()(
  devtools((set) => ({
    posts: [],
    fetchPosts: async () => {
      const posts = await getData<PostModel[]>(API.post);
      set({ posts });
    },
  }))
);
