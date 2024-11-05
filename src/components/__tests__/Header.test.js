import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore"
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>    
    )

    const loginBtn = screen.getByRole("button", { name: "Login"})

    expect(loginBtn).toBeInTheDocument()
    
})

it("Should load header component with 0 cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>    
    )

    const zeroCartItems = screen.getByRole("link", { name: "0"})

    expect(zeroCartItems).toBeInTheDocument()
    
})

it("Should change login button to logout when clicked", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>    
    )

    const loginBtn = screen.getByRole("button", { name: "Login"})

    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole("button", {name: "Logout"})

    expect(logoutBtn).toBeInTheDocument()
})