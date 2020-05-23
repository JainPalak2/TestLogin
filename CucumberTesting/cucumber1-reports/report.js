$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/rohit/user.feature");
formatter.feature({
  "name": "login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "valid login user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "password123"
      ]
    },
    {
      "cells": [
        "Admin",
        "password456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "valid login user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "dave.AbcObject.user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Lalitha\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "dave.AbcObject.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "dave.AbcObject.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "dave.AbcObject.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid login user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should be in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "dave.AbcObject.user_should_be_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Admin\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "dave.AbcObject.user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"password456\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "dave.AbcObject.user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "dave.AbcObject.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
});