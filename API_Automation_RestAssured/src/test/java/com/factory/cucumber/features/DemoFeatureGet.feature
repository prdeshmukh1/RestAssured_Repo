#Author: Prashant D
Feature: GET: Automated Demo Tests
  Description: GET: purpose of this feature is to test some demo app.

  @get @all
  Scenario Outline: GET: Test the Demo app
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | TC_GET_1 | /api/users?page=2 | application/json |             | GET           |        200 |

  @getfail @all
  Scenario Outline: GET: Test the Demo app Failing Test Case with Wrong Status Code
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName  | URL               | ContentType      | RequestBody | RequestMethod | StatusCode |
      | TC_GET_2 | /api/users?page=3 | application/json |             | GET           |        201 |
