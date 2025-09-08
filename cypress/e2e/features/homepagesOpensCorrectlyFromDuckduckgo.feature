Feature: Check Homepages 
  Background: Background name: Open Duckduckgo
    When I visit duckduckgo.com
    Then I should see a search bar

Scenario Outline: Homepage opens correctly : <expectedTitle>
    When I type <mySearch> in search bar and validate it
    And the first result title is <expectedTitle>
    And I click on the first result 
    Then the URL is <expectedURL>
    When I accept cookies
    And I choose to stay on yhe current website despite my current location

  Examples: 
    |       mySearch     |                    expectedTitle                               |         expectedURL             |
    |    "Lacoste US"    |        "Polos, Clothing & Apparel Online \| LACOSTE"           |  "https://www.lacoste.com/us/"  | 
    |    "Lacoste FR"    |        "Polos, chaussures et maroquinerie - Lacoste France"    |  "https://www.lacoste.com/fr/"  |
    |    "Lacoste China" |        "LACOSTE中国官方网站"                                    |  "https://lacoste.com.cn/"      |