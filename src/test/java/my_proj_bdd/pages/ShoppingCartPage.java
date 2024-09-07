package my_proj_bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ShoppingCartPage extends BasePage{
    public ShoppingCartPage(WebDriver driver) { super(driver); }

    // Elemente
    @FindBy(xpath = "//button[@data-testid='dialog-close-button']")
    private WebElement closePopUp;

    @FindBy(xpath = "//span[@data-testid='basket-icon-to-remove-product']")
    private WebElement removeProductButton;

    @FindBy(xpath = "//div[@data-testid='text-container']/p/following-sibling::p")
    private WebElement emptyBasketMessage;

    // Actiuni
    public void clickClosePopUp() {
        closePopUp.click();
    }

    public void clickRemoveProductButton() {
        removeProductButton.click();
    }

    // Validari
    public void validateEmptyBasketMessage() {
        Assert.assertEquals("Empty basket message is incorect", "Cosul tau este gol", emptyBasketMessage.getText());
    }
}
