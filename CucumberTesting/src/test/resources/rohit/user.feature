Feature: login feature
Scenario Outline: valid login user
Given user should be in login page
When user enters "<username>" as username
And user enters "<password>" as password
Then user clicks on login button

Examples: 
| username | password |
| Lalitha  | password123 |
| Admin    | password456 |