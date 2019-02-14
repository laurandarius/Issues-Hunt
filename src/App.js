import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keys from './config/keys';

import Header from './components/Header';
import Description from './components/Description';
import SearchBar from './components/SearchBar';
import ResultsHeader from './components/ResultsHeader'
import ResultsList from './components/ResultsList';
import Spinner from './components/Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: '',
      returnedAPI: 'no',
      errorMessage: '',
      input:''
    };
  }

  // componentDidMount() {
  //   axios.get(`https://api.github.com/search/issues?q=JavaScript&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}`)
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({ issues: res.data, returnedAPI: 'yes'});
  //   },
  //   err => {
  //     console.log(err.message);
  //     this.setState({errorMessage: err.message});
  //   })
  // }

  searchInput(event) {
    this.setState({input: event.target.value});
  }

  searchIssues(event) {
    event.preventDefault();
    const value = this.state.input;
    axios.get(`https://api.github.com/search/issues?q=${value}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}`)
     .then(res => {
       console.log(res.data);
       this.setState({ issues: res.data, returnedAPI: 'yes'});
     },
     err => {
       console.log(err.message);
       this.setState({errorMessage: err.message});
     })
  }

  ResultsListRender() {
    if (this.state.returnedAPI === 'yes') {
      return <ResultsList issuesReturn={this.state.issues}/>;
    } else {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Description />
          <SearchBar
            searchInput={event => this.searchInput(event)}
            searchIssues={event => this.searchIssues(event)}
            input={this.state.input}
          />
          <ResultsHeader totalCount={this.state.issues.total_count}/>
          {this.ResultsListRender()}
        </div>
      </div>
    );
  }
}

export default App;
