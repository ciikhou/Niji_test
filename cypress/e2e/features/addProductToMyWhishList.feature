Feature: Add product to my whishllist 
    Scenario: Add product to my whishlist (Not logged in)
    Given I go to Lacoste Homepage
    When I search the product "Polo L" via the searchBar
    And I wait until my results appear and I click on it
    And I add this product to my whishlist
    Then I see a success notification
    And The success notification title is "Article ajouté à mes favoris"
    And The success notification message is "Identifiez-vous ou créez votre compte pour ne pas perdre vos favoris."
    And The icon 'love' is active
    And the main menu wishlist button has been incremented
    When I go to whishlist page
    Then I see well my product


 