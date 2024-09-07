package my_proj_bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends BasePage{

    public RegisterPage(WebDriver driver){
        super(driver);
    }

    //Elemente
    @FindBy(xpath = "//button[@data-testid='submit-button']")
    private WebElement continueButton;

    @FindBy(xpath = "//p[@data-testid='form-error-message']")
    private WebElement validationErrorMessage;

    @FindBy(xpath = "//input[@data-testid='input-field']")
    private WebElement emailPhoneInput;

    @FindBy(xpath = "//h2[@data-testid='create-account-title']")
    private WebElement registerHeader;

    @FindBy(xpath = "//button[@data-stellar='Tertiary-button']")
    private WebElement createAccount;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement userText;

    @FindBy(xpath = "//p[@data-testid='create-account-description']")
    private WebElement description;

    // Actiuni
    public void fillEmailPhoneInput(String emailPhone) {
        emailPhoneInput.sendKeys(emailPhone);
    }

    public void clickContinueButton() {
        continueButton.click();
    }

    public void clickCreateNewAccount() {
        createAccount.click();
    }

    // Validari
    public void validateErrorMessage(String expectedMessage) { //am parametrizat ca sa puna userul ce vrea
        Assert.assertEquals("Validation message is wrong", expectedMessage, validationErrorMessage.getText());
    }

    public void validateRegisterHeader() {
        Assert.assertEquals("Register header is wrong", "Creeaza un cont nou", registerHeader.getText());
    }

//    public void validateUserText(String expectedMessage) {
//        Assert.assertEquals("User text is wrong", expectedMessage, userText.getText());
//    } // nu merge
    public void validateDescription(String expectedMessage) {
        Assert.assertEquals("description is wrong", expectedMessage, description.getText());
    } // pus de mine
}

