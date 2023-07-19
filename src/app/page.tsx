"use client";
import { use, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((users) => {
        console.log({ users });
      });
  }, []);
  return (
    <main>
      <h1>app/page.tsx!!</h1>
    </main>
  );
}
