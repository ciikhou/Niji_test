class HomePage{

  elements = {
      acceptCookiesBtn : () => cy.get('#didomi-notice-agree-button span'),   
      geolocationStay : () => cy.get('*[class^="js-geolocation-stay"]'),
      searchBarInput : () => cy.get('#search-input'),
      }

    acceptCookies() {
        cy.get("body").then($body => {
            if ($body.find("#didomi-notice-agree-button span").length > 0) {
                this.elements.acceptCookiesBtn().click()
                cy.log("Cookies accepted just now !")
            }
            else{
                cy.log("No cookies popup")
            }
        })
    }

    stayOnCurrentWebsiteDespiteMyCurrentLocation(){
        cy.get("body").then($body => {
            if ($body.find("*[class^='js-geolocation-stay']").length > 0) {
                this.elements.geolocationStay().click()
                cy.log("Stay on the current website despite my current location")
            }
            else{
                cy.log("No Stay current location popup")
            }
        }) 
    }

    directAccess(){
        this.acceptCookies()
        this.stayOnCurrentWebsiteDespiteMyCurrentLocation()
    }

    searchProductWithSearchBar(mySearch){
    this.elements.searchBarInput().click();
    cy.wait(1000)
    this.elements.searchBarInput().type(`${mySearch}`);
    }
}
export default HomePage;