"use client";
import { SignupForm } from "../../../components/organisms/SignupForm";
import { styled } from "styled-components";
export default function Home() {
  return (
    <div>
      <Title>アカウントを作成</Title>
      <SignupForm />
    </div>
  );
}

const Title = styled.h1`
  padding: 24px;
  text-align: center;
`;
