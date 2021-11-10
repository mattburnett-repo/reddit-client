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
* Test Driven Development
  * React Testing Framework 
  * Enzyme
* Git / GitHub

---

## Features
* App retrieves authorization_token from API
* App communicates with Reddit API using OAuth
* Users can retrieve listings based on filters (best / controversial / hot / new / rising / top)
* Users can search listings

---

### Future work
TBD

---

### TO DO
* Implement comments feature
* UI reacts responsively to changes in display size
  * Using grid layout, and I'd like to keep that, instead of throwing everything into Flexbox
* Testing
  * a few deliberate fails (tests not implemented yet)
  * Need to run Selenium after comments implementation
* Better / more comprehensive error handling. mostly just display something and let user go back