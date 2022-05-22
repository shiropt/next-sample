/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoadingOverlay, Button, Input, InputWrapper, Container, List, ThemeIcon, Text, Box } from "@mantine/core";
import { CircleCheck, CircleDashed, Trash } from "tabler-icons-react";
import { useTodo } from "../hooks/useTodo";
import { useStore } from "../store";

const Home: NextPage = () => {
  const { fetchPosts, posts } = useStore();
  const { postTodo, deleteTodo, state, setState } = useTodo();
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container className="p-12">
      <Container className="flex pb-10 border-b">
        <InputWrapper id="input-demo" label="Todo" size="xl">
          <Input
            value={state.title}
            className="w-96"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, title: e.target.value })}
          />
        </InputWrapper>
        <Button className="mt-9 ml-4" onClick={postTodo}>
          send
        </Button>
      </Container>
      <List spacing="xs" withPadding={true} size="xl" center className=" mt-8">
        {[...posts].reverse().map((post) => (
          <List.Item
            icon={
              false ? (
                <ThemeIcon color="green" size={24} radius="xl">
                  <CircleCheck size={16} />
                </ThemeIcon>
              ) : (
                <ThemeIcon color="blue" size={24} radius="xl">
                  <CircleDashed size={16} />
                </ThemeIcon>
              )
            }
            key={post.id}
          >
            <Box className="flex">
              <Text className="w-40">{post.title}</Text>
              <Trash onClick={() => deleteTodo(post.id)} />
            </Box>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default Home;
