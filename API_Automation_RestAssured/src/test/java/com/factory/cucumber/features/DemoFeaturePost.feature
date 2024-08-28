#Author: Prashant Deshmukh
Feature: POST: Automated Demo Test
  Description: POST: The purpose of this feature is to test some demo app.

  @post @all
  Scenario Outline: POST: Test the Demo app
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "name" is "morpheus"
    And I try to verify the response value "job" is "leader"
    #And I try to verify the response value "id" is "55"

    Examples: 
      | TestName  | URL        | ContentType      | RequestBody        | RequestMethod | StatusCode |
      | TC_POST_1 | /api/users | application/json | testdata/test.json | POST          |        201 |

  @postfail @all
  Scenario Outline: POST: Test the Demo app for Failing Test Case due to improper Response Job .
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "name" is "morpheus"
    And I try to verify the response value "job" is "leaders"
    #And I try to verify the response value "id" is "75"

    Examples: 
      | TestName  | URL        | ContentType      | RequestBody        | RequestMethod | StatusCode |
      | TC_POST_2 | /api/users | application/json | testdata/test.json | POST          |        201 |
