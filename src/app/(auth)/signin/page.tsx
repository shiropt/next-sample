"use client";
import { styled } from "styled-components";
import { SigninForm } from "../../../components/organisms/SigninForm";

export default function Home() {
  return (
    <div>
      <Title>ログイン</Title>
      <SigninForm />
    </div>
  );
}

const Title = styled.h1`
  padding: 24px;
  text-align: center;
`;
