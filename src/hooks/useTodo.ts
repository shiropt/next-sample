import { useStore } from "./../store/index";
/* eslint-disable react-hooks/exhaustive-deps */
import { useSWRConfig } from "swr";
import { useCallback, useState } from "react";
import { PostModel } from "../models/post";
import { useFetchers } from "../hooks/useFetcher";
import { API } from "../utils/path";

type State = {
  title: string;
  posts: PostModel[];
  completed: boolean;
};

export const useTodo = () => {
  const { useFetch, postData, deleteData } = useFetchers();
  const { fetchPosts, posts } = useStore();

  const [state, setState] = useState<State>({
    title: "",
    posts: [],
    completed: false,
  });

  const postTodo = useCallback(async () => {
    if (!state.title) return;
    await postData<PostModel, Pick<PostModel, "title">>(API.post, {
      title: state.title,
    });
    fetchPosts();
    setState({ ...state, title: "" });
  }, [state.title]);

  const deleteTodo = useCallback(
    async (id?: number) => {
      if (!id) return;
      await deleteData(`${API.post}/${id}`);
      fetchPosts();
    },
    [state.posts]
  );

  return {
    state,
    postTodo,
    deleteTodo,
    setState,
  };
};
