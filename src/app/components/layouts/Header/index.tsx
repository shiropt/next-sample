"use client";

import { FC } from "react";
import { styled } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Header: FC<Props> = ({ children }) => {
  return (
    <HeaderWrapper>
      <div>Title</div>
      <div>{children}</div>
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
