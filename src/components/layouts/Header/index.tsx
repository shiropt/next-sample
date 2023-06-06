"use client";
import { useRouter } from "next/navigation";

import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Header: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <HeaderWrapper>
      <LeftContent
        onClick={() => {
          router.push("/");
        }}
      >
        Title
      </LeftContent>
      <RightContent>{children}</RightContent>
    </HeaderWrapper>
  );
};
Header.displayName = "Header";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;
const LeftContent = styled.div`
  cursor: pointer;
`;
const RightContent = styled.div`
  display: block;
`;
