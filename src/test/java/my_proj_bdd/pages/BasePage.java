package my_proj_bdd.pages;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.NoSuchElementException;

public class BasePage {
    public WebDriver driver;

    @FindBy(xpath = "//button[@data-testid='modal-close-button']")
    private WebElement closePopUp;

    public BasePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this); //initializer pentru elemente si pagina
    }

    //mai pot pune orice metoda mi-ar fi utila in TOATE paginile // exemplu:
     public void validatePageURL(String expectedUrl) {
            Assert.assertTrue("Url is not correct", driver.getCurrentUrl().contains(expectedUrl));
        }

    public void clickClosePopUp() {
        try {
            // incearca sa dai click daca gasesti acest element
            closePopUp.click();
        } catch (NoSuchElementException e) {
            // testul trece mai departe si daca nu a gasit acel element
        }
    }
}
