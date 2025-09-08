class MainMenuNavbar{

  elements = {
      whishlistBtn : () =>cy.get('.js-wishlist-link'),
      whishlistBtnCounter : () => this.elements.whishlistBtn().find('.js-wishlist-counter .js-minicart-counter')
    }

    goToWhishlistPage() {
        this.elements.whishlistBtn().click()
    }

    getWhishlistCounter(){
      return this.elements.whishlistBtnCounter()
    }
}
export default MainMenuNavbar;