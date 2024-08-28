$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeatureGet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Prashant D"
    }
  ],
  "line": 2,
  "name": "GET: Automated Demo Tests",
  "description": "Description: GET: purpose of this feature is to test some demo app.",
  "id": "get:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test the Demo app",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 13,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "TC_GET_1",
        "/api/users?page\u003d2",
        "application/json",
        "",
        "GET",
        "200"
      ],
      "line": 14,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21657200,
  "status": "passed"
});
formatter.before({
  "duration": 589400,
  "status": "passed"
});
formatter.before({
  "duration": 1385500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test the Demo app",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@get"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users?page\u003d2\" for test case \"TC_GET_1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d2",
      "offset": 22
    },
    {
      "val": "TC_GET_1",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 87240900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 763300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 1313541400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 2561900,
  "status": "passed"
});
formatter.after({
  "duration": 883100,
  "status": "passed"
});
formatter.after({
  "duration": 283300,
  "status": "passed"
});
formatter.after({
  "duration": 297200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "GET: Test the Demo app Failing Test Case with Wrong Status Code",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app-failing-test-case-with-wrong-status-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@getfail"
    },
    {
      "line": 16,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app-failing-test-case-with-wrong-status-code;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 24,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app-failing-test-case-with-wrong-status-code;;1"
    },
    {
      "cells": [
        "TC_GET_2",
        "/api/users?page\u003d3",
        "application/json",
        "",
        "GET",
        "201"
      ],
      "line": 25,
      "id": "get:-automated-demo-tests;get:-test-the-demo-app-failing-test-case-with-wrong-status-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 403800,
  "status": "passed"
});
formatter.before({
  "duration": 425700,
  "status": "passed"
});
formatter.before({
  "duration": 1073700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "GET: Test the Demo app Failing Test Case with Wrong Status Code",
  "description": "",
  "id": "get:-automated-demo-tests;get:-test-the-demo-app-failing-test-case-with-wrong-status-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@getfail"
    },
    {
      "line": 16,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want to set URL as \"/api/users?page\u003d3\" for test case \"TC_GET_2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users?page\u003d3",
      "offset": 22
    },
    {
      "val": "TC_GET_2",
      "offset": 56
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 1463700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 65809100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 844700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c20[0]\u003e but was:\u003c20[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.StepDefinitionsTest.verifyStatusCode(StepDefinitionsTest.java:98)\r\n\tat ✽.Then I try to verify the status code is \"201\"(DemoFeatureGet.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 528400,
  "status": "passed"
});
formatter.after({
  "duration": 289800,
  "status": "passed"
});
formatter.after({
  "duration": 271700,
  "status": "passed"
});
formatter.uri("DemoFeaturePost.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Prashant Deshmukh"
    }
  ],
  "line": 2,
  "name": "POST: Automated Demo Test",
  "description": "Description: POST: The purpose of this feature is to test some demo app.",
  "id": "post:-automated-demo-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"leader\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#And I try to verify the response value \"id\" is \"55\""
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 16,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "TC_POST_1",
        "/api/users",
        "application/json",
        "testdata/test.json",
        "POST",
        "201"
      ],
      "line": 17,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 455100,
  "status": "passed"
});
formatter.before({
  "duration": 311100,
  "status": "passed"
});
formatter.before({
  "duration": 802600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users\" for test case \"TC_POST_1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"testdata/test.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"leader\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users",
      "offset": 22
    },
    {
      "val": "TC_POST_1",
      "offset": 49
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 940000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 469200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/test.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 75
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 439947800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 737500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 36
    },
    {
      "val": "morpheus",
      "offset": 46
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1562600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 36
    },
    {
      "val": "leader",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1698500,
  "status": "passed"
});
formatter.after({
  "duration": 84300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c20[1]\u003e but was:\u003c20[0]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.HooksDemoTest.verifyStatusCode(HooksDemoTest.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 741400,
  "status": "passed"
});
formatter.after({
  "duration": 387200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "POST: Test the Demo app for Failing Test Case due to improper Response Job .",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app-for-failing-test-case-due-to-improper-response-job-.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I try to verify the response value \"job\" is \"leaders\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#And I try to verify the response value \"id\" is \"75\""
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app-for-failing-test-case-due-to-improper-response-job-.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 30,
      "id": "post:-automated-demo-test;post:-test-the-demo-app-for-failing-test-case-due-to-improper-response-job-.;;1"
    },
    {
      "cells": [
        "TC_POST_2",
        "/api/users",
        "application/json",
        "testdata/test.json",
        "POST",
        "201"
      ],
      "line": 31,
      "id": "post:-automated-demo-test;post:-test-the-demo-app-for-failing-test-case-due-to-improper-response-job-.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 638400,
  "status": "passed"
});
formatter.before({
  "duration": 305000,
  "status": "passed"
});
formatter.before({
  "duration": 803400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "POST: Test the Demo app for Failing Test Case due to improper Response Job .",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app-for-failing-test-case-due-to-improper-response-job-.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@postfail"
    },
    {
      "line": 19,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I want to set URL as \"/api/users\" for test case \"TC_POST_2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I hit the API with requestbody \"testdata/test.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I try to verify the response value \"job\" is \"leaders\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users",
      "offset": 22
    },
    {
      "val": "TC_POST_2",
      "offset": 49
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 990800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 557200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/test.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 75
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 419819800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 36
    },
    {
      "val": "morpheus",
      "offset": 46
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 36
    },
    {
      "val": "leaders",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1786900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cleader[]\u003e but was:\u003cleader[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.StepDefinitionsTest.compareResponseValues(StepDefinitionsTest.java:125)\r\n\tat com.factory.cucumber.stepdefinitions.StepDefinitionsTest.verifyResponseValue(StepDefinitionsTest.java:110)\r\n\tat ✽.And I try to verify the response value \"job\" is \"leaders\"(DemoFeaturePost.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 55500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c20[1]\u003e but was:\u003c20[0]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.HooksDemoTest.verifyStatusCode(HooksDemoTest.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 316600,
  "status": "passed"
});
formatter.after({
  "duration": 210900,
  "status": "passed"
});
formatter.uri("DemoFeaturePut.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Prashant Deshmukh"
    }
  ],
  "line": 2,
  "name": "PUT: Automated Demo Tests",
  "description": "Description: PUT: The purpose of this feature is to test some demo app.",
  "id": "put:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "PUT: Test the Demo app",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@put"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"zion resident\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 15,
      "id": "put:-automated-demo-tests;put:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "TC_PUT_1",
        "/api/users/2",
        "application/json",
        "testdata/test2.json",
        "PUT",
        "201"
      ],
      "line": 16,
      "id": "put:-automated-demo-tests;put:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 225500,
  "status": "passed"
});
formatter.before({
  "duration": 159400,
  "status": "passed"
});
formatter.before({
  "duration": 345300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "PUT: Test the Demo app",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@put"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users/2\" for test case \"TC_PUT_1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"testdata/test2.json\" and request method is \"PUT\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"zion resident\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users/2",
      "offset": 22
    },
    {
      "val": "TC_PUT_1",
      "offset": 51
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 730200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 561500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/test2.json",
      "offset": 32
    },
    {
      "val": "PUT",
      "offset": 76
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 376623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 612500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 36
    },
    {
      "val": "morpheus",
      "offset": 46
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1067400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 36
    },
    {
      "val": "zion resident",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 2091300,
  "status": "passed"
});
formatter.after({
  "duration": 112400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c20[1]\u003e but was:\u003c20[0]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.HooksDemoTest.verifyStatusCode(HooksDemoTest.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 500800,
  "status": "passed"
});
formatter.after({
  "duration": 333400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "PUT: Test the Demo app with Failing Response for Job.",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app-with-failing-response-for-job.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@putfail"
    },
    {
      "line": 18,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I try to verify the response value \"job\" is \"zion residesnt\"",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app-with-failing-response-for-job.;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 28,
      "id": "put:-automated-demo-tests;put:-test-the-demo-app-with-failing-response-for-job.;;1"
    },
    {
      "cells": [
        "TC_PUT_2",
        "/api/users/2",
        "application/json",
        "testdata/test2.json",
        "PUT",
        "201"
      ],
      "line": 29,
      "id": "put:-automated-demo-tests;put:-test-the-demo-app-with-failing-response-for-job.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 400500,
  "status": "passed"
});
formatter.before({
  "duration": 227100,
  "status": "passed"
});
formatter.before({
  "duration": 655100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "PUT: Test the Demo app with Failing Response for Job.",
  "description": "",
  "id": "put:-automated-demo-tests;put:-test-the-demo-app-with-failing-response-for-job.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@putfail"
    },
    {
      "line": 18,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to set URL as \"/api/users/2\" for test case \"TC_PUT_2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I hit the API with requestbody \"testdata/test2.json\" and request method is \"PUT\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I try to verify the response value \"job\" is \"zion residesnt\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users/2",
      "offset": 22
    },
    {
      "val": "TC_PUT_2",
      "offset": 51
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 599600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 427700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/test2.json",
      "offset": 32
    },
    {
      "val": "PUT",
      "offset": 76
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 395867500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 3303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 36
    },
    {
      "val": "morpheus",
      "offset": 46
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1344200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 36
    },
    {
      "val": "zion residesnt",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 1563400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003czion reside[]nt\u003e but was:\u003czion reside[s]nt\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.StepDefinitionsTest.compareResponseValues(StepDefinitionsTest.java:125)\r\n\tat com.factory.cucumber.stepdefinitions.StepDefinitionsTest.verifyResponseValue(StepDefinitionsTest.java:110)\r\n\tat ✽.And I try to verify the response value \"job\" is \"zion residesnt\"(DemoFeaturePut.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 91000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c20[1]\u003e but was:\u003c20[0]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.factory.cucumber.stepdefinitions.HooksDemoTest.verifyStatusCode(HooksDemoTest.java:38)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 408500,
  "status": "passed"
});
formatter.after({
  "duration": 724700,
  "status": "passed"
});
formatter.uri("Hooks.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Prashant Deshmukh"
    }
  ],
  "line": 2,
  "name": "GET: Hooks Demo",
  "description": "Description: GET: purpose of this feature is to test demo Hooks.",
  "id": "get:-hooks-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET: Test Hooks",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@hooks"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\""
    }
  ],
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 10,
      "value": "#Then I try to verify the status code is \"\u003cStatusCode\u003e\""
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks;",
  "rows": [
    {
      "cells": [
        "ContentType",
        "RequestBody",
        "RequestMethod"
      ],
      "line": 13,
      "id": "get:-hooks-demo;get:-test-hooks;;1"
    },
    {
      "cells": [
        "application/json",
        "",
        "GET"
      ],
      "line": 14,
      "id": "get:-hooks-demo;get:-test-hooks;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 388000,
  "status": "passed"
});
formatter.before({
  "duration": 347200,
  "status": "passed"
});
formatter.before({
  "duration": 603800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET: Test Hooks",
  "description": "",
  "id": "get:-hooks-demo;get:-test-hooks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@hooks"
    },
    {
      "line": 5,
      "name": "@all"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\""
    }
  ],
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\" and request method is \"GET\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 658200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "GET",
      "offset": 57
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 56586200,
  "status": "passed"
});
formatter.after({
  "duration": 525400,
  "status": "passed"
});
formatter.after({
  "duration": 155000,
  "status": "passed"
});
formatter.after({
  "duration": 154300,
  "status": "passed"
});
});