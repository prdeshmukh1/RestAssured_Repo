#Author: Prashant Deshmukh
Feature: PUT: Automated Demo Tests
  Description: PUT: The purpose of this feature is to test some demo app.

  @put @all
  Scenario Outline: PUT: Test the Demo app
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "name" is "morpheus"
    And I try to verify the response value "job" is "zion resident"

    Examples: 
      | TestName  | URL          | ContentType      | RequestBody         | RequestMethod | StatusCode |
      | TC_PUT_1 | /api/users/2 | application/json | testdata/test2.json | PUT           |        201 |

  @putfail @all
  Scenario Outline: PUT: Test the Demo app with Failing Response for Job.
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"
    And I try to verify the response value "name" is "morpheus"
    And I try to verify the response value "job" is "zion residesnt"

    Examples: 
      | TestName  | URL          | ContentType      | RequestBody         | RequestMethod | StatusCode |
      | TC_PUT_2 | /api/users/2 | application/json | testdata/test2.json | PUT           |        201 |
