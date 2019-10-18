import React, { Component } from "react";

import AppContext from "../AppContext";
import SearchForm from "../SearchForm/SearchForm";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import LoadingText from "../LoadingText/LoadingText";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      characterData: {}
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  callApi = (selected, searchTerm) => {
    this.setState({
      loading: true
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
      <section id="app">
        <AppContext.Provider
          value={{
            callApi: this.callApi,
            characterData: this.state.characterData
          }}
        >
          <SearchForm />
          {loading ? <LoadingText /> : <ResultsContainer />}
        </AppContext.Provider>
      </section>
    );
  }
}
