import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Keys from './config/keys';

import Header from './components/Header';
import Description from './components/Description';
import SearchBar from './components/SearchBar';
import ResultsHeader from './components/ResultsHeader'
import ResultsList from './components/ResultsList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: '',
      errorMessage: ''
    };
  }

  // componentDidMount() {
  //   axios.get(`https://api.github.com/search/issues?q=pyton&client_id=${Keys.clientID}&client_secret=${Keys.clientSecret}`)
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({ issues: res.data});
  //   },
  //   err => {
  //     console.log(err.message);
  //     this.setState({errorMessage: err.message});
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Description />
          <SearchBar />
          <ResultsHeader />
          <ResultsList />
        </div>
      </div>
    );
  }
}

export default App;
