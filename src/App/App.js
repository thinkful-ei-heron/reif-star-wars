import React, { Component } from 'react';

import AppContext from '../AppContext';
import SearchForm from '../SearchForm/SearchForm';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import LoadingText from '../LoadingText/LoadingText';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      characterData: {},
      results: [],
    };
  }

  handleResults = () => {
    let output;
    if (this.state.characterData.results) {
      if (this.state.characterData.results.length > 0) {
        output = this.state.characterData.results.map(item => (
          <p key={item.url} id={item.index} className='result-name'>
            {item.name ? item.name : item.title}
          </p>
        ));
      } else {
        output = (
          <span>Coulnd't find anything! Try another name or topic.</span>
        );
      }
    } else {
      output = (
        <span className='default-results-text'>
          Enter a name and hit submit!
        </span>
      );
    }
    return output;
  };

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  callApi = (selected, searchTerm) => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      fetch(`https://swapi.co/api/${selected}/?search=+${searchTerm}`)
        .then(resp => this.handleErrors(resp))
        .then(response => response.json())
        .then(data => this.setState({ characterData: data, loading: false }))
        .catch(eMessage => {
          console.log(eMessage);
        });
    }, 2000);
  };

  render() {
    const loading = this.state.loading;
    return (
      <section id='app'>
        <AppContext.Provider
          value={{
            callApi: this.callApi,
            results: this.handleResults(),
          }}
        >
          <SearchForm />
          {/* Render LoadingText component
           while waiting for fetch */}
          {loading ? <LoadingText /> : <ResultsContainer />}
        </AppContext.Provider>
      </section>
    );
  }
}
