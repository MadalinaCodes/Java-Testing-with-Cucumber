package my_proj_bdd.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import my_proj_bdd.driver.DriverManager;
import my_proj_bdd.pages.RegisterPage;

public class RegisterSteps extends DriverManager {
    RegisterPage registerPage = new RegisterPage(driver);

    @When("I click 'Continua' button")
    public void clickContinue() {
        registerPage.clickContinueButton();
    }

    @When("I fill email/phone input: (.*)$")
    public void fillEmailPhone(String phoneEmail) {
        registerPage.fillEmailPhoneInput(phoneEmail);
    }

    @When("I click 'Creeaza un cont nou'")
    public void clickCreateNewAccount() {
        registerPage.clickCreateNewAccount();
    }

    @Then("I validate error message: (.*)$") // (.*)$" = orice scriu in feature
    public void validateMessage(String expectedMessage) {
        registerPage.validateErrorMessage(expectedMessage);
    }

    @Then("I validate register header is displayed")
    public void validateRegisterHeader() {
        registerPage.validateRegisterHeader();
    }

    @When("I validate user text: (.*)$")
    public void validateUserText(String expectedMessage) {
        registerPage.validateUserText(expectedMessage);
    }

    @Then("I validate description: (.*)$")
    public void validateDescription(String expectedMessage) {
        registerPage.validateDescription(expectedMessage);
    }
}
