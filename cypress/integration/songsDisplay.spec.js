beforeEach(() => {
  cy.resetDB();
  cy.populateDB();
});

afterEach(() => {
  cy.end();
});

describe("Top songs page", () => {
  it.skip("should display the top songs", () => {
    cy.visit("/top");
    cy.get("article").should((articles) => {
      expect(articles).to.have.length(10);
    });
  });

  it("should display the most voted must to be on top", () => {
    cy.visit("/top");
    cy.get("article").first().should("contain", "Ludovico");
    cy.get(".score").should((scores) => {
      const first = Number(scores[0].innerText);
      const second = Number(scores[1].innerText);
      expect(first - second).to.be.gte(0);
    });
  });
});

describe("Random page", () => {
  it.skip("should display a random song", () => {
    cy.visit("/random");
    cy.get("article").should((articles) => {
      expect(articles).to.have.length(1);
    });
  });
});

describe("Home page", () => {
  it.skip("should display songs", () => {
    cy.visit("/");
    cy.get("article").should((articles) => {
      expect(articles).to.have.length(11);
    });
  });
});
