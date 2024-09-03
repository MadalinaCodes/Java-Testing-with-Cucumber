package my_proj_bdd.pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public WebDriver driver;

    public BasePage(WebDriver driver){
        this.driver = driver;
        PageFactory.initElements(driver, this); //initializer pentru elemente si pagina
    }

    //mai pot pune orice metoda mi-ar fi utila in TOATE paginile
}
