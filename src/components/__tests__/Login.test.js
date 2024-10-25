import { render, screen } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom";

test("Render login component", () => {

    render(<Login/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Render button inside login component", () => {

    render(<Login/>)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
})

test("Render 2 input elements", () => {

    render(<Login/>)

    const emailInput = screen.getByRole("textbox")
    const passwordInput = screen.getByLabelText(/password/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
})

