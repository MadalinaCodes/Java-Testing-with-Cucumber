$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/tests/homePage.feature");
formatter.feature({
  "name": "Home page features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User can accept cookies",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tests/register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Contul meu\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickContulMeu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \u0027Contul meu\u0027 url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative: Missing phone/email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate error message: Te rugam sa introduci adresa de e-mail sau numarul de telefon",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative: Invalid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: \u003cemail_phone\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.step({
  "name": "I validate error message: Te rugam sa introduci un format valid",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email_phone"
      ]
    },
    {
      "cells": [
        "123"
      ]
    },
    {
      "cells": [
        "123123.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Contul meu\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickContulMeu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \u0027Contul meu\u0027 url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative: Invalid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: 123",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.fillEmailPhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate error message: Te rugam sa introduci un format valid",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Contul meu\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickContulMeu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \u0027Contul meu\u0027 url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative: Invalid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: 123123.com",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.fillEmailPhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate error message: Te rugam sa introduci un format valid",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Positive: Valid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: \u003cemail_phone\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.step({
  "name": "I click \u0027Creeaza un cont nou\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I validate register header is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email_phone"
      ]
    },
    {
      "cells": [
        "0774123123"
      ]
    },
    {
      "cells": [
        "123@email.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Contul meu\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickContulMeu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \u0027Contul meu\u0027 url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive: Valid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: 0774123123",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.fillEmailPhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Creeaza un cont nou\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickCreateNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate register header is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateRegisterHeader()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Contul meu\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickContulMeu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate \u0027Contul meu\u0027 url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive: Valid phone/email",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I fill email/phone input: 123@email.com",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.fillEmailPhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Continua\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Creeaza un cont nou\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.clickCreateNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate register header is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.validateRegisterHeader()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/tests/shoppingCart.feature");
formatter.feature({
  "name": "Shopping Cart features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I can delete a product from shopping cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am a user on Mega Image home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate cookie header and click accept cookies button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.acceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Adauga\u0027 button with index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickAdauga(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Shopping Cart\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.clickShoppingCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \u0027Remove product\u0027 button",
  "keyword": "When "
});
formatter.match({
  "location": "ShoppingCartSteps.clickRemoveProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate empty basket message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartSteps.emptyBasketMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate shopping cart url is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartSteps.validateCartUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
});