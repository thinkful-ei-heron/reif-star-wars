import React, { Component } from "react";

import AppContext from "../AppContext";

export default class ResultsContainer extends Component {
  static contextType = AppContext;

  styles = {
    border: "1px solid black"
  };

  render() {
    return (
      <AppContext.Consumer>
        {/* FIX explain this */}
        {value => (
          <section id="results-container" style={this.styles}>
            {/* FIX refactor this */}
            {value.characterData.results ? (
              value.characterData.results.length > 0 ? (
                value.characterData.results.map(item => (
                  <p style={this.styles} key={item.url} id={item.index}>
                    {item.name}
                  </p>
                ))
              ) : (
                <span>Coulnd't find anything! Try another name.</span>
              )
            ) : (
              <span>Enter a name and hit submit!</span>
            )}
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}
