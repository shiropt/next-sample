import { render, screen } from "@testing-library/react";
import { Header } from ".";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/",
}));

test("Headerコンポーネントレンダリングテスト", () => {
  render(<Header />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("ルートパスで新規登録、ログインボタンが表示されていること", () => {
  render(<Header />);
  expect(screen.getByRole("button", { name: "新規登録" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "ログイン" })).toBeInTheDocument();
});
