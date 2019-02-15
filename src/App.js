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
import NoResults from './components/NoResults';
import BlankSlate from './components/BlankSlate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: '',
      returnedAPI: 'no',
      spinner: 'hide',
      errorMessage: '',
      input:'',
      language:'',
      label:'',
    };
  }

  showSpinner() {
    this.setState({
      returnedAPI:'pending',
      spinner: 'show'
    });
  }

  callAPI() {
    const value = this.state.input;
    const language = this.state.language;
    const label = this.state.label;
    console.log(label);
    axios.get(`https://api.github.com/search/issues?q=${value}+state:open+label:${label}+language:${language}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}`)
     .then(res => {
       console.log(res.data);
       this.setState({
         issues: res.data,
         returnedAPI: 'yes',
         spinner: 'hide'
       });
     },
     err => {
       console.log(err.message);
       this.setState({errorMessage: err.message});
     })
  }

  //hold value in searchbar
  searchInput(event) {
    this.setState({input: event.target.value});
  }

  //set the state as soon as mouse hovers dropdown
  //then use state values to make API call
  onHoverLabel(event) {
    this.setState({label: `"${event.target.dataset.id}"`});
  }

  onHoverlanguage(event) {
    this.setState({language: event.target.dataset.id});
  }

  //only search for open issues
  search(event) {
    event.preventDefault();
    this.showSpinner();
    this.callAPI();
  }

  ResultsListRender() {
    if (this.state.returnedAPI === 'yes' && this.state.issues.total_count !== 0) {
      return <ResultsList issuesReturn={this.state.issues}/>;
    }
    if (this.state.spinner ==='show' && this.state.returnedAPI !== 'yes' ) {
      return <Spinner />;
    }
    if (this.state.returnedAPI === 'yes' && this.state.issues.total_count === 0) {
      return <NoResults />;
    }
    return <BlankSlate />;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Description />
          <SearchBar
            searchInput={event => this.searchInput(event)}
            searchIssues={event => this.search(event)}
            input={this.state.input}
          />
          <ResultsHeader
            labelSearch={event => this.search(event)}
            languageSearch={event => this.search(event)}
            totalCount={this.state.issues.total_count}
            onHoverLabel={event => this.onHoverLabel(event)}
            onHoverlanguage={event => this.onHoverlanguage(event)}
          />
          {this.ResultsListRender()}
        </div>
      </div>
    );
  }
}

export default App;
