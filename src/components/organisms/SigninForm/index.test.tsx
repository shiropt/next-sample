import { render, screen } from "@testing-library/react";
import { SigninForm } from ".";
import userEvent from "@testing-library/user-event";

test("signup from レンダリングテスト", () => {
  render(<SigninForm />);
  expect(screen.getByRole("form")).toBeInTheDocument();
});
