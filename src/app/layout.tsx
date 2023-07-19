"use client";
import { styled } from "styled-components";
import { Header } from "../components/layouts/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../libs/redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body id="root" className={inter.className}>
        <Provider store={store}>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
const Container = styled.div`
  margin-top: 80px;
`;
