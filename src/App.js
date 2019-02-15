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
      spinner: 'hide',
      errorMessage: '',
      input:'',
      language:'',
      label:'',
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

  //hold value in searchbar
  searchInput(event) {
    this.setState({input: event.target.value});
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

  //only search for open issues
  searchIssues(event) {
    event.preventDefault();
    this.showSpinner();
    this.callAPI();
  }
  //set the state as soon as mouse hovers dropdown
  //then use state values to make API call
  onHover(event) {
    this.setState({label: `"${event.target.dataset.id}"`});
  }

  labelSearch(event) {
    event.preventDefault();
    this.showSpinner();
    this.callAPI();
  }

  ResultsListRender() {
    if (this.state.returnedAPI === 'yes') {
      return <ResultsList issuesReturn={this.state.issues}/>;
    } else if (this.state.spinner ==='show' && this.state.returnedAPI !== 'yes' ){
      return <Spinner />;
    } else {
      return null;
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
          <ResultsHeader
            labelSearch={event => this.labelSearch(event)}
            totalCount={this.state.issues.total_count}
            onHover={event => this.onHover(event)}
          />
          {this.ResultsListRender()}
        </div>
      </div>
    );
  }
}

export default App;
