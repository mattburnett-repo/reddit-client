# Reddit Client project
This project is an implementation of the Reddit Client, part of the Codecademy Full-Stack Enginner program -> \
https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-react-and-redux-portfolio-project/modules/fecp-reddit-client/kanban_projects/reddit-client

Only generally-worded requirements are provided. All design / code / test is done without assistance / guidance.

---

## Assets
* Wireframes
    Created using wireframe.cc -> \
    https://wireframe.cc/pro/pp/3ce4928be488346

    Wireframes are included in the project repository in the 'public' folder
* Project outline / management using GitHub Projects -> \
    https://github.com/users/mattburnett-repo/projects/3

---

## Testing
* Tests are created using the React Testing Framework and are located in the repo under the src/__tests__ folder 

* Run tests using 'npm test'

---

## Technologies used
* HTML / CSS / JS 
* Reddit API -> https://www.reddit.com/dev/api 
* React / Redux 
* React Testing Framework 

---

## Features
* App retrieves authorization_token from API
* App communicates with Reddit API using OAuth
* Users can retriee listings based on filters (best / controversial / hot / new / rising / top)
* Users can search listings

---

### Future work
TBD

---

### TO DO
* UI reacts responsively to changes in display size
  * Using grid layout, and I'd like to keep that, instead of throwing everything into Flexbox
    * Will need to come back to this later. I have no more patience for this project.
* TESTS
  * testing is overwhelming. available informaton doesn't make sense.
    * https://redux.js.org/usage/writing-tests
    * https://hackernoon.com/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce
    * https://hacks.mozilla.org/2018/04/testing-strategies-for-react-and-redux/
    * https://www.robinwieruch.de/react-connected-component-test
    * https://www.youtube.com/watch?v=h7ukDItVN_o
    * https://www.willowtreeapps.com/craft/best-practices-for-unit-testing-with-a-react-redux-approach
  * I don't know what to do, where to start, how to proceed.
    * maybe start here and go over again
      * https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-test-driven-development-with-javascript/modules/fecp-introduction-tdd-fundamentals/informationals/fecp-introduction-tdd-fundamentals
      * https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-redux/modules/fecp-testing-redux/articles/fecp-external-writing-tests-in-redux
* better / more comprehensive error handling. mostly just display something and let user go back