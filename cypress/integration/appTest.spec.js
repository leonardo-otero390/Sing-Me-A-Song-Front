afterEach(() => {
  cy.end();
});

describe("Add Song page interactions", () => {
  before(() => {
    cy.resetDB();
  });
  it("should add a song successfully", () => {
    const song = {
      name: "Ylvis - Language of Love",
      link: "https://youtu.be/MCxDJnHiLqs",
    };

    cy.visit("/");
    cy.get("input[placeholder=Name]").type(song.name);
    cy.get("input[placeholder='https://youtu.be/...']").type(song.link);
    cy.intercept("POST", "/recommendations").as("postRecommendation");
    cy.get("div>button>svg").click();
    cy.wait("@postRecommendation");

    cy.contains(song.name).should("be.visible");
  });

  it.skip("should upvote a song successfully", () => {
    cy.get(".upVote").click();
    cy.get(".upVote").click();
    cy.get(".score").contains("2").should("be.visible");
  });

  it.skip("should upvote a song successfully", () => {
    cy.get(".downVote").click();
    cy.get(".score").contains("1").should("be.visible");
  });
});
