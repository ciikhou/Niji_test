class SearchResultsPage{

  elements = {
      firstResults : () =>cy.get(".js-search-result .js-search-product-tile",{timeout : 35000}).first(),
    }

    clickOnTheFirstResult() {
        this.elements.firstResults().click()
    }
}
export default SearchResultsPage;