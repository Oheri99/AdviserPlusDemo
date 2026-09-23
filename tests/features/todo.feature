Feature: Todo list management
  As a user
  I want to add tasks and reminders
  So that I can track things to do

  Scenario: Add a task item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Buy groceries" with type "Task"
    Then I should see "Buy groceries" in the todo list
    And the todo item "Buy groceries" should include type "Task"

  Scenario: Add a reminder item
    Given I am on the home page
    When I navigate to the todo page
    And I add a todo item "Pay rent" with type "Reminder"
    Then I should see "Pay rent" in the todo list
    And the todo item "Pay rent" should include type "Reminder"
