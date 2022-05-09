Cypress.Commands.add("resetDB", () => {
  cy.request("DELETE", Cypress.config().apiUrl + "/admin/database");
});

Cypress.Commands.add("populateDB", () => {
  cy.request("POST", Cypress.config().apiUrl + "/admin/database/populate");
});
