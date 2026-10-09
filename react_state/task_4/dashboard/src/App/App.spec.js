import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("Renders Header", () => {
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: /school dashboard/i,
            })
        ).toBeInTheDocument();
    });

    it("Renders Login", () => {
        expect(
            screen.getByText(/Login to access the full dashboard/i)
        ).toBeInTheDocument();
    });

    it("Renders Footer", () => {
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("renders CourseList after login", () => {
        fireEvent.change(screen.getByLabelText("Email:"), {
            target: { value: "test@example.com" },
        });

        fireEvent.change(screen.getByLabelText("Password:"), {
            target: { value: "password123" },
        });

        fireEvent.click(screen.getByDisplayValue("OK"));

        expect(screen.getByText("ES6")).toBeInTheDocument();
    });

    it("renders Login after logout", () => {
        fireEvent.change(screen.getByLabelText("Email:"), {
            target: { value: "test@example.com" },
        });

        fireEvent.change(screen.getByLabelText("Password:"), {
            target: { value: "password123" },
        });

        fireEvent.click(screen.getByDisplayValue("OK"));
        fireEvent.click(screen.getByText(/logout/i));

        expect(
            screen.getByText(/Login to access the full dashboard/i)
        ).toBeInTheDocument();

        expect(screen.queryByText("ES6")).not.toBeInTheDocument();
    });
});
