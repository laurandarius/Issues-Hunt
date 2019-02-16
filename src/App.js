import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keys from './config/keys';

import Header from './components/Header';
import Description from './components/Description';
import SearchBar from './components/SearchBar';
import ClearQuery from './components/ClearQuery';
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
      setLabel:''
    };
  }

  showSpinner() {
    this.setState({
      returnedAPI:'pending',
      spinner: 'show',
    });
  }

  callAPI() {
    const value = this.state.input;
    const language = this.state.language;
    const label = this.state.label;
    axios.get(`https://api.github.com/search/issues?q=${value}+state:open+label:${label}+language:${language}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}`)
     .then(res => {
       console.log(res.data);
       this.setState({
         issues: res.data,
         returnedAPI: 'yes',
         spinner: 'hide',
         setLabel: label
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
  //quotes are used for search query
  searchByLabel(event) {
    this.setState({
      label: `"${event.target.dataset.id}"`
    },
      () => this.searchNormal()
    );
  }

  searchByLanguage(event) {
    console.log(event.target.dataset.id);
    this.setState({
      language: event.target.dataset.id
    },
      () => this.searchNormal()
    );
  }

  clearSearchbar() {
    this.setState({
      input: ''
    },
      () => this.searchNormal()
    );
  }

  //event.preventDefault not working in callback
  searchNormal() {
    this.showSpinner();
    this.callAPI();
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

  QueryRender() {
    if (this.state.input !== '') {
      return <ClearQuery
                clearSearchbar={event => this.clearSearchbar(event)}
                input={this.state.input}/>;
    }
    return null;
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
          {this.QueryRender()}
          <ResultsHeader
            searchedLabel={this.state.setLabel}
            searchedLanguaged={this.state.language}
            totalCount={this.state.issues.total_count}
            searchByLabel={event => this.searchByLabel(event)}
            searchByLanguage={event => this.searchByLanguage(event)}
          />
          {this.ResultsListRender()}
        </div>
      </div>
    );
  }
}

export default App;
