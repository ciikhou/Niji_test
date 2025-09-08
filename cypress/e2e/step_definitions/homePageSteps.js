import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObject/HomePage";

const myHomePage = new HomePage()

When("I accept cookies", function () {
    myHomePage.acceptCookies()
});

When("I choose to stay on yhe current website despite my current location", function () {
    myHomePage.stayOnCurrentWebsiteDespiteMyCurrentLocation()
});

When("I search the product {string} via the searchBar", function (mySearch) {
    myHomePage.searchProductWithSearchBar(mySearch)
});