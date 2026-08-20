import { render, screen } from "@testing-library/react";
import BenefitsPage from "@/app/benefits/page";

describe("BenefitsPage", () => {
  it("renders the hero headline", () => {
    render(<BenefitsPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /built for the way.*you work the field/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders all seven benefit cards", () => {
    render(<BenefitsPage />);
    [
      "Centralized Trial Data",
      "Streamlined Task Management",
      "Real-Time Data Access",
      "Effortless Data Sharing",
      "Better Decision-Making",
      "Improved Efficiency",
      "Stronger Collaboration",
    ].forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  it("renders benefit detail bullet points", () => {
    render(<BenefitsPage />);
    expect(
      screen.getByText("Eliminate errors from manual data entry"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Real-time communication across teams"),
    ).toBeInTheDocument();
  });

  it("renders the contact section", () => {
    render(<BenefitsPage />);
    expect(
      screen.getByRole("heading", { name: /leave the spreadsheets behind/i }),
    ).toBeInTheDocument();
  });
});
