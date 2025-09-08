import {Then } from "@badeball/cypress-cucumber-preprocessor";
import WishlistPage from "../pageObject/WishlistPage";

const wishlistPage = new WishlistPage()



Then("I see well my product", function () {
     wishlistPage.getFirstProduct()
});