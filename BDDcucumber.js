/*BDD-Behaviour Driven Development
BDD in playwright is an approach of writing test in a 
business readable format usually using Gherkin syntax
such as Given,When,Then etc
playwright is then used to automate these steps through step definition

 cucumber  is an BDD framework or tool,used to write testcase in a simple
 human readable language called Gherkin

 keywords
  1.Feature-describe the functionality
  2.Scenario-individual testcase
  3.Given-precondition or initial setup
  4.When-action
  5.Then-expected result
  6.And-additional steps

  Folder name:features
  file name:login.feature

  eg:-
  Feature:login functionality
  Scenario:login with valid credential
  Given:user is on the loginpage
  When:user enter valid username and password
  Then:user successfully navigated to homepage

  login.feature
  login.feature is a feature file,it contains test scenario written in BDD format,
  using keyword like feature scenario When,Given,Then
  it is written in simple English even non-technical users can understand

  describe application behaviour-it explain how login functionality should work

  Folder name:step-definitions
  filename:login.steps.js

  login.steps.js
   login.steps.js is called step definition file,it contains the actual
   automation code for the each step written inside the feature file

difference btw login.feature and login.steps.js

login.feature                   login.steps.js

contains test scenario           contains automation code
written in english               written in javascript
easy for buisiness users         easy for automation testing
uses Given,When,Then etc         use playwright+cucumber code*/

/* Hooks
Hooks are special fn used to include for before or after scenario
 1.BeforeAll-run only once before all scenarios
 2.AfterAll-excecutes hooks one time for after all scenarios are completed
 3.Before-this hooks executes before each scenario
 4.After-this hooks executes after each scenario
 5.BeforeStep-this hooks executes before every step in a scenario
 6.AfterStep-this hooks executes after every step in a scenario*/

 /*cucumber tags-tags are used to group an organise test scenario
 help us execute specific scenarios or feature files instead of running all test cases. 
 */

 /*jenkins
 jenkins is a opensource automation tool or server used for continous integration and 
 continous deployment.
 jenkins automatically runs our application build an test cases without manually executed

 what is the use of jenkins?
 jenkins is automatically executes playwright test cases
 1.automated test execution-rus playwright test cases automatically without manual execution
 2.time scheduling-executes test cases at a specific time or interval
 3.CI/CD integration-runs test whenever testers new code to github
 4.test reports-help us new test execution results
 5.failure notification-failure notification helps identify failed test cases
 6.repeated execution-runs test cases whenever require manual intervention
 
 steps
 1.create a playwright project
 2.push your project github
 3.open jenkins
   create a new jenkins job
   a.click new item
   b.enter project name
   c.select freestyle project
   d.click ok
4.configure github
  under sourcecode management
   a.select git
   b.enter your github repository url
5.configure build step
  select execute windows batch command(for windows)
    a.npm install
    b.npx playwright install
    c.npx playwright test
6.execute the job
  click build now*/

