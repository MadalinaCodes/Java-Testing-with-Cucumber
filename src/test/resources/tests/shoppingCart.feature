Feature: Shopping Cart features

  Scenario: I can delete a product from shopping cart
    Given I am a user on Mega Image home page
    Then I validate cookie header and click accept cookies button
    When I click 'Adauga' button with index: 1
    When I click 'Shopping Cart' button
    When I click 'Remove product' button
    Then I validate empty basket message is displayed
    Then I validate shopping cart url is correct
