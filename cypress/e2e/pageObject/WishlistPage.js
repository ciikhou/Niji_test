class WishlistPage{

  elements = {
      allProducts : () =>cy.get(".js-product-tile-link")
    }

    getFirstProduct() {
        return this.elements.allProducts().first()
    }
}
export default WishlistPage;