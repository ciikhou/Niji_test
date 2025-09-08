import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchResultsSection from "../pageObject/SearchResultsPage";

const mySearchResults =  new searchResultsSection()

When("I wait until my results appear and I click on it", function () {
    mySearchResults.clickOnTheFirstResult()
});



