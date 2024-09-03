package my_proj_bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {
    public HomePage(WebDriver driver) {
        super(driver);
    } // initializer

    // Elemente
    @FindBy(xpath = "//button[@data-testid='cookie-popup-accept']")
    private WebElement acceptCookiesButton;

    @FindBy(xpath = "//h2[@data-testid='cookie-popup-title']")
    private WebElement cookiesHeader;

    @FindBy(xpath = "//button[@data-testid='header-myhub-toggle']")
    private WebElement contulMeuButton;

    // Actiuni
    public void clickAcceptCookiesButton() {
        acceptCookiesButton.click();
    }

    public void openHomePage() {
        driver.get("https://www.mega-image.ro/");
    }

    public void clickContulMeuButton() {
        contulMeuButton.click();
    }

    // Validari
    public void validateCookieHeader() {
        // mesaj in caz ca pica validarea, la ce ma astept, ce am gasit pe site
        Assert.assertEquals("Cookie Header title is incorect", "Cookie-uri pe mega-image.ro", cookiesHeader.getText());
    }
}
