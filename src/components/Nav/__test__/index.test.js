import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component renders", () => {
  it("renders", () => {
    render(<Nav />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Maria Mireles");
    expect(getByTestId("about")).toHaveTextContent("About me");
    expect(getByTestId("mywork")).toHaveTextContent("Portfolio");
    expect(getByTestId("contact")).toHaveTextContent("Contact");
  });
});
