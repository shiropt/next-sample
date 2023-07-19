import { render, screen } from "@testing-library/react";
import { SignupForm } from ".";
import userEvent from "@testing-library/user-event";

test("signin from レンダリングテスト", () => {
  render(<SignupForm />);
  expect(screen.getByRole("form")).toBeInTheDocument();
});
