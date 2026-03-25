# Issues Hunt #

Issues such as "good first issue" or "help wanted" are difficult to find. Right now a user would have to click on a specific repository and look through their issues to apply label filters. Being able to find issues easier would encourage more people, especially novice programmers, to contribute to open source projects.

### User Story:
* User can search for GitHub Issues across all repositories
* User can filter results by language and label
* User can then sort the results

### [Live Demo](https://issueshunt.herokuapp.com/)

![Screenshots](./public/search_example.png)

## Prerequisites

Before running this project locally, ensure you have the following installed:
- **Node.js** (version 10 or higher) and npm
- **Heroku CLI** (if deploying to Heroku)
- **GitHub Account** (for API credentials)

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| React | ^16.8.1 | Frontend framework |
| Axios | ^0.18.0 | HTTP client for API calls |
| React Bootstrap | ^1.0.0-beta.5 | UI components |
| Bootstrap | ^4.2.1 | CSS framework |
| Font Awesome | ^1.2.15 | Icons |

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fulin426/Issues-Hunt.git
   cd Issues-Hunt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables** (optional but recommended)
   
   The application requires GitHub API credentials to increase rate limits. Create a `.env` file in the root directory:
   
   ```
   REACT_APP_GITHUB_CLIENT_ID=your_client_id_here
   REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## Environment Variables

The following environment variables are optional but recommended:

- `REACT_APP_GITHUB_CLIENT_ID`: Your GitHub OAuth Client ID
- `REACT_APP_GITHUB_CLIENT_SECRET`: Your GitHub OAuth Client Secret

These credentials increase the GitHub API rate limit from 60 to 5,000 requests per hour.

### How to obtain GitHub Credentials

1. Visit [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details
4. Use `http://localhost:3000` as the Authorization callback URL
5. Copy the Client ID and Client Secret

### Heroku Configuration

For deployment to Heroku:

1. Install the Heroku CLI: `https://devcenter.heroku.com/articles/heroku-cli`
2. Login: `heroku login`
3. Create an app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set REACT_APP_GITHUB_CLIENT_ID=your_client_id
   heroku config:set REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret
   ```
5. Deploy: `git push heroku main`

## Troubleshooting

### API Rate Limit Errors

If you see rate limit errors when searching for issues:
- Obtain your own GitHub Client ID and Secret (see above)
- Add them to your `.env` file
- Restart the development server

### Build Failures

If the build fails, try:
1. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Clear browser cache
3. Verify all Node.js and npm versions meet requirements

## Technology Stack

- **Frontend**: React, HTML, CSS, Bootstrap
- **HTTP Client**: Axios
- **Icons**: Font-Awesome
- **UI Components**: React Bootstrap
- **Search**: GitHub Search API

## API Reference

### GitHub Search API

Documentation: [GitHub Search Issues and Pull Requests](https://developer.github.com/v3/search/#search-issues-and-pull-requests)

By default, this repository does not include API keys used in development. API calls are limited to 60 per hour without Client ID and Client Secret.

### Increasing GitHub API Rate Limit

Documentation: [GitHub API Rate Limiting](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)

---

## Open Source Contribution

We welcome contributions! If this issue caught your attention, you're in the right place. Here's what makes a good first contribution:

- **Documentation improvements** (like this README!)
- **Bug fixes** in existing features
- **Feature enhancements** with clear requirements
- **Code quality improvements** (refactoring, adding tests)

Check our [issue tracker](https://github.com/fulin426/Issues-Hunt/issues) for labels like:
- `good first issue` 
- `help wanted`
- `bug`

---

## License

MIT License - feel free to use this project for learning and contributions.
