class ProductPage{

  elements = {
      productName : () => cy.get('.js-pdp-title'),
      whishlistBtn : () => cy.get('.pdp-layout').find('.icon-love',{timeout: 15000}),  
      successNotification : () => cy.get('aside').find('.js-notif div',{timeout:15000}) 
    }

    clickOnWhishlistBtn(){
      this.elements.whishlistBtn().click()
    }

    getWhishlistBtn(){
      return this.elements.whishlistBtn()
    }

    getProductName(){
      this.elements.productName().invoke('text').then((text) => {
        return text
      });
    }

    checkSuccessNotification(){
      this.elements.successNotification()
    }

    getSuccessNotificationTitle(){
      return this.elements.successNotification().find('div').find('p').first()
    }

    getSuccessNotificationMessage(){
      return this.elements.successNotification().find('div').find('p:nth-child(2)')
    }
}
export default ProductPage;