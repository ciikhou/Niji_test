import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainMenuNavbar from "../pageObject/common/mainMenuNavbar";

const mainMenu = new MainMenuNavbar()

When("I go to whishlist page", function () {
    mainMenu.goToWhishlistPage()
});