# Reddit Client project
This project is an implementation of the Reddit Client, part of the Codecademy Full-Stack Enginner program -> \
https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-react-and-redux-portfolio-project/modules/fecp-reddit-client/kanban_projects/reddit-client

Only generally-worded requirements are provided. All design / code / test is done without assistance / guidance.

Build deployed here -> https://suspicious-hawking-232766.netlify.app/

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
* Tests are created using Jest / Enzyme and are located in the repo under the src/\__tests\__ folder 

* Run tests using 'npm test'

---

## Technologies used
* HTML / CSS / JS 
* Reddit API -> https://www.reddit.com/dev/api 
* React / Redux 
* Test Driven Development
  * Jest
  * Enzyme
* Git / GitHub

---

## Features
* App retrieves authorization_token from API
* App communicates with Reddit API using OAuth
* Users can retrieve listings based on filters (best / controversial / hot / new / rising / top)
* Users can view comments related to a given listing
* Users can search reddit.com for specific search terms
* Build deployed to Netlify: https://suspicious-hawking-232766.netlify.app/

---

### Future work
* Better / more comprehensive error handling. Mostly just display something and let user go back
  * Look at React error boundary