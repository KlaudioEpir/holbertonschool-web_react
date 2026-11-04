import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    it("Renders Header component", () => {
        render(<App />);
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("Renders Login Component when user is not logged in", () => {
        render(<App />);
        const loginText = screen.getByText(/Log in to continue/i);
        expect(loginText).toBeInTheDocument();
    });

    it("Renders Footer Component", () => {
        render(<App />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("Renders Login when isLoggedIn is false (default state)", () => {
        const { container } = render(<App />);
        const loginComponent = container.querySelector(".App-body");
        expect(loginComponent).toBeInTheDocument();
    });

    it("Updates user state to logged in when logIn function is triggered", () => {
        render(<App />);
        
        // Plotësojmë formën e login-it për të simuluar hyrjen
        const emailInput = screen.getByLabelText(/Email:/i);
        const passwordInput = screen.getByLabelText(/Password:/i);
        const submitButton = screen.getByDisplayValue("Ok");

        fireEvent.change(emailInput, { target: { value: "test@test.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(submitButton);

        // Pasi bëhet log in, duhet të shfaqet Course list në vend të login-it
        expect(screen.getByText(/Course list/i)).toBeInTheDocument();
    });

    it("Verifies displayDrawer state changes with handleDisplayDrawer and handleHideDrawer", () => {
        render(<App />);
        
        // Menu item për njoftimet duhet të jetë prezent
        const notificationMenu = screen.getByText("Your notifications");
        expect(notificationMenu).toBeInTheDocument();

        // Klikimi për të shfaqur ose fshehur drawer-in
        fireEvent.click(notificationMenu);
        
        // Kontrollojmë nëse shfaqet kutia e njoftimeve
        expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
    });
});