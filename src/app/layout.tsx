import { Header } from "../components/layouts/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";
import { Container } from "../components/layouts/Container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body id="root" className={inter.className}>
        <Provider>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
