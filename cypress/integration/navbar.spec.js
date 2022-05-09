describe("Test menu buttons at home", () => {
    const url = Cypress.config().baseUrl;
  
    it("Should redirect to /home", () => {
      cy.visit("/");
      cy.contains("Home").click();
      cy.url().should("equal", url + "/");
    });
  
    it("should redirect to /top", () => {
        cy.visit("/");
        cy.contains("Top").click();
        cy.url().should("equal", url + "/top");
      });

    it("should redirect to /random", () => {
        cy.visit("/");
        cy.contains("Random").click();
        cy.url().should("equal", url + "/random");
      });
  });

  describe("Test menu buttons at top", () => {
    const url = Cypress.config().baseUrl;
  
    it("Should redirect to /home", () => {
      cy.visit("/top");
      cy.contains("Home").click();
      cy.url().should("equal", url + "/");
    });
  
    it("should redirect to /top", () => {
        cy.visit("/top");
        cy.contains("Top").click();
        cy.url().should("equal", url + "/top");
      });

    it("should redirect to /random", () => {
        cy.visit("/top");
        cy.contains("Random").click();
        cy.url().should("equal", url + "/random");
      });
  });

  describe("Test menu buttons at random", () => {
    const url = Cypress.config().baseUrl;
  
    it("Should redirect to /home", () => {
      cy.visit("/random");
      cy.contains("Home").click();
      cy.url().should("equal", url + "/");
    });
  
    it("should redirect to /top", () => {
        cy.visit("/random");
        cy.contains("Top").click();
        cy.url().should("equal", url + "/top");
      });

    it("should redirect to /random", () => {
        cy.visit("/random");
        cy.contains("Random").click();
        cy.url().should("equal", url + "/random");
      });
  });