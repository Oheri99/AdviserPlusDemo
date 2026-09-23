@todo @smoke
Feature: Todo list management
  As a user
  I want to add tasks and reminders
  So that I can track things to do

  @task @smoke
  Scenario: Add a task item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Buy groceries" with type "Task"
    Then I should see "Buy groceries" in the todo list
    And the todo item "Buy groceries" should include type "Task"

  @reminder @regression
  Scenario: Add a reminder item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Pay rent" with type "Reminder"
    Then I should see "Pay rent" in the todo list
    And the todo item "Pay rent" should include type "Reminder"

  @task @regression
  Scenario: Add a second task item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Call mom" with type "Task"
    Then I should see "Call mom" in the todo list
    And the todo item "Call mom" should include type "Task"

  @reminder @smoke
  Scenario: Add a second reminder item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Submit invoice" with type "Reminder"
    Then I should see "Submit invoice" in the todo list
    And the todo item "Submit invoice" should include type "Reminder"
