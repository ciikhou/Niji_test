import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../pageObject/HomePage"; 

const myHomePage = new homepage()

Given("I go to Lacoste Homepage", function () {
    cy.visit("www.niji.fr")
    cy.window().then((win) => {
        win.eval('window.location.replace("http:www.lacoste.com");');
    });

    myHomePage.directAccess()

    cy.window().then((win) => {
        win.eval("window.addEventListener('load', function () {})");
    });
    cy.wait(1000)
})
