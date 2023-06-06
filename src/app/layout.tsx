"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "../components/atoms/Button";
import { Header } from "../components/layouts/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header>
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
        </Header>
        {children}
      </body>
    </html>
  );
}
const ButtonWrapper = styled(Button)`
  margin: 0 8px;
`;
