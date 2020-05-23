package dave;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:cucumber1-reports","json:cucumber1-reports/reports.json"},
features= {"src/test/resources/rohit/user.feature"})

public class RunnerClass23 {

}
