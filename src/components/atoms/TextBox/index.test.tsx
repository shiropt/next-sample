import { render, screen } from "@testing-library/react";
import { TextBox } from ".";
import userEvent from "@testing-library/user-event";

test("TextBoxコンポーネントレンダリングテスト", () => {
  render(<TextBox />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});
