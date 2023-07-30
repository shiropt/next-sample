"use client";
import { Box } from "@mantine/core";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <Box mt={140} px={40} py={20}>
      {children}
    </Box>
  );
};
