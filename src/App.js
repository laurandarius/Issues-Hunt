import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keys from './config/keys';
//Import Components
import Header from './components/Header';
import Description from './components/Description';
import SearchBar from './components/SearchBar';
import ClearQuery from './components/ClearQuery';
import ResultsHeader from './components/ResultsHeader'
import ResultsList from './components/ResultsList';
import Welcome from './components/Welcome';
import NoResults from './components/NoResults';
import PaginationWidget from './components/PaginationWidget';
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
      readOnly: '',
      language:'',
      label:'',
      sortOption: '',
      pageLink: '',
      firstPage: 1,
      lastPage: 15,
      selectedPage: 1
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
      sortOption = this.state.sortOption;
    }

    axios.get(`https://api.github.com/search/issues?q=${value}+state:open${labelParameter}${languageParameter}&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}${sortOption}&per_page=25`)
     .then(res => {
       // console.log(res.data);
       // console.log(res.headers);
       let headers;
       let pageLink;
       //set as 0 as default
       let lastPage = 0;
       //only run logic if results are more than 0
       //link isnt sent when there are no results
       if (res.data.total_count.toLocaleString() !== '0' && res.headers.link !== undefined) {
         // console.log(res.headers.link);
         headers = res.headers.link.split(';')
         //logic to get pageLink
         pageLink = headers[0].slice(1, headers[0].length - 2);
         //logic to grab last page number from header and updateState
         lastPage = headers[1].split('=');
         let returnLength = lastPage.length - 1;
         lastPage = lastPage[returnLength].slice(0, lastPage[returnLength].length - 1);
       }
       this.setState({
         issues: res.data,
         issuesCount: res.data.total_count.toLocaleString(), //returns a language-sensitive represenation of string
         returnedAPI: 'yes',
         spinner: 'hide',
         lastPage: parseInt(lastPage),
         pageLink: pageLink,
         readOnly: ''
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
    //disable buttons when waiting for API
    //when spinner is showing
    if (this.state.spinner === 'show') {
      return;
    } else {
      this.setState({
        label: `"${event.target.dataset.id}"`,
        selectedPage: 1
      },
        () => this.searchNormal()
      );
    }
  }

  searchByLanguage(event) {
    if (this.state.spinner === 'show') {
      return;
    } else {
      this.setState({
        language: event.target.dataset.id,
        selectedPage: 1
      },
        () => this.searchNormal()
      );
    }
  }

  searchBySort(event) {
    if (this.state.spinner === 'show') {
      return;
    } else {
      this.setState({
        sortOption: event.target.dataset.id,
        selectedPage: 1
      },
        () => this.searchNormal()
      );
    }
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
      sortOption: '',
      readOnly: 'readonly',
      selectedPage: 1
    },
      () => this.callAPI()
    );
  }

  ResultsListRender() {
    if (this.state.returnedAPI === 'yes' && this.state.issues !== '' && this.state.issuesCount !== "0" ) {
      return (
        <div>
          <ResultsList issuesReturn={this.state.issues} />
          <PaginationWidget
            selectPageNumber={event => this.selectPageNumber(event)}
            nextButton={event => this.nextButton(event)}
            previousButton={event => this.previousButton(event)}
            firstPage={this.state.firstPage}
            lastPage={this.state.lastPage}
            selectedPage={this.state.selectedPage} />
        </div>
      );
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

  //Widget previous and next buttons
  previousButton(event) {
    event.preventDefault();
    if (this.state.selectedPage !== 1) {
      this.showSpinner();
      this.setState({
        selectedPage: this.state.selectedPage - 1
      },
        () => this.callApiFromWidget()
      );
    }
  }

  nextButton(event) {
    event.preventDefault();
    if (this.state.selectedPage < this.state.lastPage) {
      this.showSpinner();
      this.setState({
        selectedPage: this.state.selectedPage + 1
      },
        () => this.callApiFromWidget()
      );
    } else {
      this.setState({
        selectedPage: this.state.selectedPage
      });
    }
  }

  callApiFromWidget() {
    axios.get(`${this.state.pageLink}${this.state.selectedPage}`)
     .then(res => {
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

  selectPageNumber(event) {
    event.preventDefault();
    //convert string to number
    let pageNumber =parseInt(event.target.dataset.id);
    //only update state if it is a number
    if(isNaN(pageNumber)) {
      return;
    } else {
      this.showSpinner();
      this.setState({
        selectedPage: pageNumber,
      },
        () => this.callApiFromWidget()
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Description />
          <SearchBar
            readOnly={this.state.readOnly}
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

export default App;
