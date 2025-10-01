# Issues Hunt 🔍

**Find your next open source contribution with ease!**

Issues Hunt is a powerful search tool that helps developers discover GitHub issues labeled as "good first issue" or "help wanted" across all repositories. Instead of manually browsing through individual repositories, you can now search, filter, and sort issues from thousands of projects in one place.

Perfect for:
- 🆕 **New contributors** looking for their first open source contribution
- 💻 **Experienced developers** seeking new projects to contribute to
- 🎯 **Skill development** - find issues matching your programming language expertise
- 🚀 **Open source maintainers** who want their issues to be more discoverablessues Hunt #

Issues such as “good first issue” or “help wanted” are difficult to find. Right now a user would have to click on a specific repository and look through their issues to apply label filters. Being able to find issues easier would encourage more people, especially novice programmers, to contribute to open source projects.

### User Story:
* User can search for GitHub Issues across all repositories
* User can filter results by language and label
* User can then sort the results

### [Live Demo](https://issueshunt.herokuapp.com/)

![Screenshots](./public/search_example.png)

## Running locally
1. `git clone https://github.com/mynamevansh/Issues-Hunt.git`
2. `npm install`
3. `npm start`

Information for Search Issues as part of GitHub Developer Search API
#### [GitHub Search API](https://developer.github.com/v3/search/#search-issues-and-pull-requests)

By default this repository does not include API keys used in development. API calls are limited to 60 per hour without Client ID and Client Secret.

#### [Increasing GitHub Api Rate Limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)

or obtain you own Client ID and Client Secret by following the instructions below
#### [How to Obtain Client ID and Client Secret](https://auth0.com/docs/connections/social/github)

## 🛠️ Technology Stack
- **Frontend:** React, HTML, CSS, Bootstrap
- **HTTP Client:** Axios
- **Icons:** Font-Awesome
- **API:** GitHub Search API

## 🤝 Contributing

We welcome contributions from the community! Here are some ways you can help:

### 🐛 Bug Reports & Feature Requests
- Found a bug? Please create an issue with details about the problem
- Have an idea for a new feature? Open an issue to discuss it

### 💻 Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### 🚀 Areas for Improvement
- **UI/UX enhancements** - Better responsive design, dark mode, accessibility
- **Search features** - Advanced filters, saved searches, bookmarking
- **Performance** - Caching, pagination improvements
- **Testing** - Add unit tests and integration tests
- **Dependencies** - Update to latest React version, security updates

## 📝 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- GitHub API for providing the data
- All contributors who help improve this project
- Open source maintainers who make their issues discoverable
