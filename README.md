# Issues Hunt #

Issues such as “good first issue” or “help wanted” are difficult to find. Right now a user would have to click on a specific repository and look through their issues to apply label filters. Being able to find issues easier would encourage more people, especially novice programmers, to contribute to open source projects.

### User Story:
* User can search for GitHub Issues across all repositories
* User can filter results by language and label
* User can then sort the results

### [Live Demo](https://issueshunt.herokuapp.com/)

![Screenshots](./public/search_example.png)

## Running locally
1. `git clone https://github.com/fulin426/Issues-Hunt.git`
2. `npm install`
3. `npm start`

This app uses the following GitHub Developer REST API
#### [Search Issues](https://developer.github.com/v3/search/#search-issues-and-pull-requests)

By default this repository does not include API keys used in development. API calls are limited to 60 per hour without Client ID and Client Secret.

To learn more
#### [Increasing GitHub Api Rate Limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)

or obtain you own Client ID and Client Secret by following the instructions below
#### [How to Obtain Client ID and Client Secret](https://auth0.com/docs/connections/social/github)

## Technology ##
React, HTML, CSS, Bootstrap, Axios, Font-Awesome, Github API
