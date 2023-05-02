import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
  });
  it("initial value in button contain 0", () => {
    cy.mount(<App />);
    cy.get("button").should("contain.text", "0");
  });
});
