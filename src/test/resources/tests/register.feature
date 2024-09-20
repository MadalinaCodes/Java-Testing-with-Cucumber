Feature: Register

  Background:
    Given I am a user on Mega Image home page
    Then I validate cookie header and click accept cookies button
    When I click 'Contul meu' button
    Then I validate 'Contul meu' url is correct

  Scenario: Negative: Missing phone/email
    When I click 'Continua' button
    Then I validate error message: Te rugam sa introduci adresa de e-mail sau numarul de telefon

  Scenario Outline: Negative: Invalid phone/email
    When I fill email/phone input: <email_phone>
    When I click 'Continua' button
    Then I validate error message: Te rugam sa introduci un format valid

    Examples:
      |email_phone    |
      |123            |
      |123123.com     |

  Scenario Outline: Positive: Valid phone/email
    When I fill email/phone input: <email_phone>
    When I click 'Continua' button
    When I click 'Creeaza un cont nou'
    Then I validate register header is displayed

    Examples:
      |email_phone    |
      |0774123123     |
      |123@email.com  |

