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

Information for Search Issues as part of GitHub Developer Search API
#### [GitHub Search API](https://developer.github.com/v3/search/#search-issues-and-pull-requests)

By default this repository does not include API keys used in development. API calls are limited to 60 per hour without Client ID and Client Secret.

#### [Increasing GitHub Api Rate Limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)

or obtain you own Client ID and Client Secret by following the instructions below
#### [How to Obtain Client ID and Client Secret](https://auth0.com/docs/connections/social/github)

## Technology ##
React, HTML, CSS, Bootstrap, Axios, Font-Awesome, Github API

## Contributing

Мы приветствуем вклад сообщества! Если вы хотите помочь в развитии проекта Issues-Hunt, пожалуйста, следуйте следующим шагам:

1. **Форкните репозиторий** на свой аккаунт.
2. **Клонируйте** форкнутый репозиторий на ваш локальный компьютер.
3. **Создайте новую ветку** для ваших изменений.
4. **Внесите изменения** в код или документацию.
5. **Коммитните** ваши изменения с понятным сообщением.
6. **Запушьте** ветку на ваш форкнутый репозиторий.
7. **Создайте Pull Request** в оригинальный репозиторий.

Пожалуйста, убедитесь, что ваши изменения соответствуют стилю проекта и не нарушают существующий функционал. Если у вас есть вопросы, не стесняйтесь открывать issue для обсуждения.

