package dave;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AbcObject {
WebDriver driver;
@Given("user should be in login page")
public void user_should_be_in_login_page() {
    // Write code here that turns the phrase above into concrete actions
    System.setProperty("webdriver.chrome.driver","C:\\Users\\SAMSUNG\\Desktop\\driver\\chromedriver.exe");
    driver=new ChromeDriver();
    driver.get("https://lkmdemoaut.accenture.com/TestMeApp/");
    driver.manage().window().maximize();
    driver.findElement(By.linkText("SignIn")).click();
}

@When("user enters {string} as username")
public void user_enters_as_username(String string) {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.id("userName")).sendKeys(string);
}

@When("user enters {string} as password")
public void user_enters_as_password(String string2) {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.id("password")).sendKeys(string2);
}

@Then("user clicks on login button")
public void user_clicks_on_login_button() {
    // Write code here that turns the phrase above into concrete actions
    driver.findElement(By.xpath("//input[@name='Login']")).click();
    
}



}
