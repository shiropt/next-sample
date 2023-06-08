"use client";
import { styled } from "styled-components";
import { SigninForm } from "../../components/organisms/SigninForm";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>signin</h1>
      <Container>
        <SigninForm />
      </Container>
    </main>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
