"use client";
import { styled } from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
