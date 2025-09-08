import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import duckduckgo from "../pageObject/Duckduckgo";

const myDuckduckgoPage = new duckduckgo()

When("I visit duckduckgo.com", function () {
    myDuckduckgoPage.goToSearchPage()
});

Then("I should see a search bar", () => {
  myDuckduckgoPage.searchBarIsVisible()
});

When("I type {string} in search bar and validate it", function (mySearch) {
    myDuckduckgoPage.search(mySearch)
});

When("the first result title is {string}", function (expectedTitle) {
    myDuckduckgoPage.getFirstElementInMainResults().should("have.text",expectedTitle);
});

When("I click on the first result", function () {
    myDuckduckgoPage.getFirstElementInMainResults().click();
});

When("the URL is {string}", function (expectedURL) {
    cy.url().should("eq",expectedURL);
});