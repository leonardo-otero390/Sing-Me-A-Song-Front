beforeEach(() => {
  cy.resetDB();
  cy.populateDB();
});

afterEach(() => {
  cy.end();
});

describe("Top songs page", () => {
  it("should display the top songs", () => {
    cy.visit("/top");
    cy.get("article").should(($article) => {
      expect($article).to.have.length(10);
    });
  });

  it("should display the most voted must to be on top", () => {
    cy.visit("/top");
    cy.get("article").first().should("contain", "Ludovico");
  });
});

describe("Random page", () => {
  it("should display a random song", () => {
    cy.visit("/random");
    cy.get("article").should(($article) => {
      expect($article).to.have.length(1);
    });
  });
});

describe("Home page", () => {
  it("should display songs", () => {
    cy.visit("/");
    cy.get("article").should(($article) => {
      expect($article).to.have.length(11);
    });
  });
});