import React, { Component } from "react";

import AppContext from "../AppContext";

export default class ResultsContainer extends Component {
  // static contextType = AppContext;

  styles = {
    border: "1px solid black"
  };

  render() {
    return (
      // https://reactjs.org/docs/context.html#contextconsumer
      // A React component that subscribes to context changes.
      //
      // This allowed me to easily rerender this child when
      // the parent's state(and thus the context) changed,
      // without having to use componentDidUpdate or
      // static getDerivedStateFromProps()
      <AppContext.Consumer>
        {value => (
          <section className="results-container" style={this.styles}>
            {/* FIX refactor this \/ */}
            {value.characterData.results ? (
              value.characterData.results.length > 0 ? (
                value.characterData.results.map(item => (
                  <p style={this.styles} key={item.url} className={item.index}>
                    {item.name ? item.name : item.title}
                  </p>
                ))
              ) : (
                <span>Coulnd't find anything! Try another name or topic.</span>
              )
            ) : (
              <span className="default-results-text">
                Enter a name and hit submit!
              </span>
            )}
            {/* FIX refactor this /\ */}
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}
