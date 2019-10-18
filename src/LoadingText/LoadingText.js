import React, { Component } from "react";

export default class LoadingText extends Component {
  render() {
    return (
      <section className="loading-container">
        <span className="loading-text">Processing request...</span>
      </section>
    );
  }
}
