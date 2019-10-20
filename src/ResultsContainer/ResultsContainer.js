import React, { Component } from 'react';

import AppContext from '../AppContext';

export default class ResultsContainer extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          <section className='results-container' style={this.styles}>
            {value.results}
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}
