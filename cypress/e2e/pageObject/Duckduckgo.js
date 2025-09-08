class Duckduckgo{

  elements = {
      searchBarInput : () => cy.get("#searchbox_input"), 
      mainResults : () => cy.get(".react-results--main"), 
      firstElementInMainResult : () => this.elements.mainResults().get("article").first().find("div:nth-child(3)").find("h2 a")
  }

    goToSearchPage() {
        cy.visit("https://www.duckduckgo.com")
    }

    searchBarIsVisible(){
    this.elements.searchBarInput().should(
    "have.attr",
    "placeholder",
    "Search without being tracked");  
    }

    search(mySearch){
        this.elements.searchBarInput().type(`${mySearch}{enter}`);
    }

    getFirstElementInMainResults(){
        return this.elements.firstElementInMainResult()
    }

    accessToWebsite(website){
        this.goToSearchPage()
        this.search(website)
        this.getFirstElementInMainResults().click()
    }
}
export default Duckduckgo;