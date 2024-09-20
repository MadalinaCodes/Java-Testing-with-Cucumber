package my_proj_bdd.pages;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;
import java.util.NoSuchElementException;

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

    @FindBy(xpath = "//button[@data-testid='product-block-add']")
    private List<WebElement> addToBasketButtonsAsList;

    @FindBy(xpath = "//a[@data-testid='header-minibasket']")
        private WebElement shoppingCartButton;

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

    public void clickShoppingCartButton() {
        shoppingCartButton.click();
    }

    public void clickAddToBasketButtonByIndex(String index) {    // dau click pe buton dupa index (permit dinamica sa primesc orice index 0/1/2/3/etc)
        // declar indexul ca si int cu o sintaxa care transforma in integer valoarea unui string
        int index_as_int = Integer.valueOf(index);
        //gasim elementul
        WebElement elem = addToBasketButtonsAsList.get(index_as_int);  // ex input string "1" => 1
        // facem scroll catre element
        ((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView(true);", elem);
        // mai facem un mic scroll in jos
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("window.scrollBy(0,900)", "");
        //dam click pe buton
        executor.executeScript("arguments[0].click();", elem);
        //asteptam o secunda sa se adauge produsul in cod
        try {
            Thread.sleep(8000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    // Validari
    public void validateCookieHeader() {
        // mesaj in caz ca pica validarea, la ce ma astept, ce am gasit pe site
        Assert.assertEquals("Cookie Header title is incorect", "Cookie-uri pe mega-image.ro", cookiesHeader.getText());
    }
}
