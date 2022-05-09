Cypress.Commands.add("resetDB", () => {
  cy.request("DELETE", Cypress.config().apiUrl + "/admin/database");
});
