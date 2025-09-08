import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../pageObject/ProductPage";
import rgbHex from 'rgb-hex';
import MainMenuNavbar from "../pageObject/common/MainMenuNavbar";

const myProductPage = new ProductPage()
const mainMenu = new MainMenuNavbar()

var productName;

When("I add this product to my whishlist", function () {
    productName = myProductPage.getProductName()
    myProductPage.clickOnWhishlistBtn()
});

When("I see a success notification", function () {
    myProductPage.checkSuccessNotification()
});

When("The success notification title is {string}", function (expectedString) {
    myProductPage.getSuccessNotificationTitle().should('have.text',expectedString)
});

When("The success notification message is {string}", function (expectedString) {
    myProductPage.getSuccessNotificationMessage().should('have.text',expectedString)
});

When("The icon 'love' is active", function () {
    myProductPage.getWhishlistBtn().invoke('css', 'fill').then((bgcolor) => {
        expect(rgbHex(bgcolor)).to.eq('002d18')
  })
});

When("the main menu wishlist button has been incremented", function () {
    mainMenu.getWhishlistCounter().should('contains.text',"1")
});





