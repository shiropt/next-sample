"use client";
import { styled } from "styled-components";
import { Header } from "../components/layouts/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
const Container = styled.div`
  margin-top: 80px;
`;
