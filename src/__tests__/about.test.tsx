import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("AboutPage", () => {
  it("renders the hero headline", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Who We Are" }),
    ).toBeInTheDocument();
  });

  it("renders the mission statement", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", {
        name: /making data simple and actionable for the seed industry/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders all six value pillars", () => {
    render(<AboutPage />);
    [
      "Practical Innovation",
      "Seamless Integration",
      "Measurable Value",
      "Precision-First",
      "Integrity Always",
      "Ignored Problems",
    ].forEach((pillar) => {
      expect(screen.getByRole("heading", { name: pillar })).toBeInTheDocument();
    });
  });

  it("renders the team section with the industry-focused badge", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", {
        name: /two founders\. one overlooked industry/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Industry Focused")).toBeInTheDocument();
    expect(screen.getByAltText("Onda Software Team")).toBeInTheDocument();
  });

  it("renders the commitment section with a demo CTA", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", {
        name: /we measure success by the results you achieve/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Request a Demo" }).length,
    ).toBeGreaterThan(0);
  });
});
