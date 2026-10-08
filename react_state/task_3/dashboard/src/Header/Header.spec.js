import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import newContext from "../Context/context";

describe("Header Component", () => {
    it("Renders correct text", () => {
        render(<Header />);
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: /School Dashboard/i,
            })
        ).toBeInTheDocument();
    });

    it("Renders an image", () => {
        render(<Header />);
        expect(
            screen.getByAltText(/holberton logo/i)
        ).toBeInTheDocument();
    });

    it("does not render logout by default", () => {
        render(<Header />);
        expect(
            screen.queryByText(/logout/i)
        ).not.toBeInTheDocument();
    });

    it("renders logout when logged in", () => {
        const user = {
            email: "test@example.com",
            password: "password123",
            isLoggedIn: true,
        };

        render(
            <newContext.Provider value={{ user, logOut: jest.fn() }}>
                <Header />
            </newContext.Provider>
        );

        expect(
            screen.getByText(/Welcome test@example.com/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/logout/i)
        ).toBeInTheDocument();
    });

    it("calls logOut", () => {
        const logOut = jest.fn();

        const user = {
            email: "test@example.com",
            password: "password123",
            isLoggedIn: true,
        };

        render(
            <newContext.Provider value={{ user, logOut }}>
                <Header />
            </newContext.Provider>
        );

        fireEvent.click(screen.getByText(/logout/i));

        expect(logOut).toHaveBeenCalled();
    });
});