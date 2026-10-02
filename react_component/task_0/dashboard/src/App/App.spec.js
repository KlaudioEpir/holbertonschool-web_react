import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("Renders Header component", () => {
        const heading = screen.getByRole("heading", {
            level: 1,
            name: /school dashboard/i,
        });
        expect(heading).toBeInTheDocument();
    });

    it("Renders Login Component", () => {
        const loginText = screen.getByText(/Login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();
    });

    it("Renders Footer Component", () => {
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });

    it("CourseList is NOT rendered when isLoggedIn is false", () => {
        cleanup();
        render(<App isLoggedIn={false} />);
        
        // Verifikojmë që CourseList nuk është në dokument
        expect(screen.queryByRole("table")).not.toBeInTheDocument();
        // Dhe se forma e Login shfaqet
        expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    });

    it("CourseList is rendered when isLoggedIn is true", () => {
        cleanup();
        render(<App isLoggedIn={true} />);

        // Shpresojmë që CourseList të përmbajë tabelën ose elementin me id/role
        const courseListTable = screen.getByRole("table");
        expect(courseListTable).toBeInTheDocument();
    });
});
