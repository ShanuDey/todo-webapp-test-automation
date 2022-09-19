Feature: Verify Todo List features
  
  Background: Background name
    Given I am on the todolist page

  @AddTodo
  Scenario Outline: Add Todo item to the todo list
    When I add "<todo>" in the todo list
    Then I verify "<todo>" is showing in todo list

    Examples:
        | todo                  |
        | Swiming for one hour  |
        | Practice cp           |
        | Update test suites    |

  @DeleteTodo
  Scenario: Delete latest todo item from the list
    When I add "My test todo" in the todo list
    Then I verify "My test todo" is showing in todo list
    When I check "My test todo" from the todo list
      And I click on delete todo button
    Then I verify "My test todo" is deleted
