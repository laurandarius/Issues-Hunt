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
import Welcome from './components/Welcome';
import NoResults from './components/NoResults';
import Footer from './components/Footer';
import Spinner from './components/Spinner';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: '',
      issuesCount: "0",
      returnedAPI: 'no',
      spinner: 'hide',
      errorMessage: '',
      input:'',
      language:'',
      label:'',
      sortOption: ''
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
    //return empty string for parameter if no label, language, or sortOption is selected
    //empty parameters dont work well in query string
    let labelParameter;
    if (this.state.label === '') {
      labelParameter = '';
    } else {
      labelParameter = `+label:${this.state.label}`;
    }
    //set language parameter
    let languageParameter;
    if (this.state.language === '') {
      languageParameter = '';
    } else {
      languageParameter = `+language:${this.state.language}`;
    }
    //set sort option
    let sortOption;
    if(this.state.sortOption === '') {
      sortOption = '';
    } else {
      //parameters already set in DropdownSort.js
      sortOption = sortOption = this.state.sortOption;
    }

    axios.get(`https://api.github.com/search/issues?q=${value}+state:open${labelParameter}${languageParameter}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}${sortOption}`)
     .then(res => {
       console.log(res.data);
       // console.log(res.headers);
       console.log(res.headers.link);
       this.setState({
         issues: res.data,
         issuesCount: res.data.total_count.toLocaleString(), //returns a language-sensitive represenation of string
         returnedAPI: 'yes',
         spinner: 'hide',
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

  //quotes are used for search query
  searchByLabel(event) {
    this.setState({
      label: `"${event.target.dataset.id}"`
    },
      () => this.searchNormal()
    );
  }

  searchByLanguage(event) {
    this.setState({
      language: event.target.dataset.id
    },
      () => this.searchNormal()
    );
  }

  searchBySort(event) {
    this.setState({
      sortOption: event.target.dataset.id
    },
      () => this.searchNormal()
    );
  }

  clearSearchbar() {
    this.setState({
      issues: '',
      issuesCount: "0",
      input: '',
      language: '',
      label: '',
      sortOption: ''
    },
      () => this.ResultsListRender()
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
    //clear any parameters before making new search
    this.setState({
      issues: '',
      issuesCount: "0",
      language: '',
      label: '',
      sortOption: ''
    },
      () => this.callAPI()
    );
  }

  ResultsListRender() {
    if (this.state.returnedAPI === 'yes' && this.state.issues !== '' && this.state.issuesCount !== "0" ) {
      return <ResultsList issuesReturn={this.state.issues}/>;
    }
    if (this.state.spinner ==='show' && this.state.returnedAPI !== 'yes' ) {
      return <Spinner />;
    }
    //error handling if no issues returned
    if (this.state.issuesCount === "0" && this.state.issues !== '') {
      return <NoResults />;
    //on load no issues in state
    } if (this.state.issues === '') {
      return <Welcome />;
    }
    return <Welcome/>;
  }

  QueryRender() {
    if (this.state.input !== '' || this.state.language !== '' || this.state.label !== '' || this.state.issues !== '') {
      return <ClearQuery clearSearchbar={event => this.clearSearchbar(event)} />;
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
            searchBySort={event => this.searchBySort(event)}
            currentSortOption={this.state.sortOption}
            searchedLabel={this.state.label}
            searchedLanguaged={this.state.language}
            totalCount={this.state.issuesCount}
            searchByLabel={event => this.searchByLabel(event)}
            searchByLanguage={event => this.searchByLanguage(event)}
          />
          {this.ResultsListRender()}
          <Footer />
        </div>
      </div>
    );
  }
}
// https://api.github.com/search/issues?q=${value}+state:open${labelParameter}+language:${language}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}${sortOption}
export default App;
