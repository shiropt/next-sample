"use client";
import { useRouter, usePathname } from "next/navigation";

import { FC } from "react";
import { styled } from "styled-components";
import { Button } from "../../atoms/Button";

export const Header: FC = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <HeaderWrapper>
      <LeftContent
        onClick={() => {
          router.push("/");
        }}
      >
        LOGO
      </LeftContent>
      <div>
        <div>
          {path !== "/signup" && (
            <ButtonWrapper
              onClick={() => {
                router.push("/signup");
              }}
              variant="Important"
            >
              新規登録
            </ButtonWrapper>
          )}
          {path !== "/signin" && (
            <ButtonWrapper
              onClick={() => {
                router.push("/signin");
              }}
            >
              ログイン
            </ButtonWrapper>
          )}
        </div>
      </div>
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

const ButtonWrapper = styled(Button)`
  margin: 0 8px;
`;
