Feature: Demo feature

  A minimal feature to give a starting point

  Scenario: Passing scenario
    Given I have started my test
    When I change the state
    Then I pass

  Scenario: Failing scenario
    Given I have started my test
    When I change the state
    Then I fail

  Scenario: Parallel scenario
    Given I have started my test
    When I change the state
    Then I parallel

