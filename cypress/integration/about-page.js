it("About page", () => {
  cy.log(`Visiting /about/`);
  cy.visit("/about/");
});

it("Non-existing page", () => {
  cy.log(`Visiting /aboutaaa/`);
  cy.visit("/aboutaaa/");
});