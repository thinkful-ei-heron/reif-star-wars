import React, { Component } from "react";

export default class LoadingText extends Component {
  render() {
    return (
      <section id="loading-container">
        <span id="loading-text">Processing request...</span>
      </section>
    );
  }
}
