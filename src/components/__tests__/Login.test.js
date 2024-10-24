import { render, screen } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom";

test("Render Login Component", () => {

    render(<Login/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})