import React, { Component } from "react";

import AppContext from "../AppContext";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: { value: "", touched: false },
      selected: "people"
    };
  }
  static contextType = AppContext;

  handleChange = e => {
    this.setState({
      input: {
        value: e.target.value,
        touched: e.target.value.length > 0 ? true : false
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.callApi(this.state.selected, this.state.input.value);
  };

  handleDropDown = e => {
    let output =
      document.getElementById("type-select").value === "character"
        ? "people"
        : e.target.value;
    this.setState({
      selected: output
    });
  };

  render() {
    return (
      <form
        id="character-search-form"
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <fieldset>
          <legend>Search for your favorite {this.state.selected}!</legend>
          <section id="character-search-container">
            <select
              name="query"
              id="type-select"
              onChange={e => {
                this.handleDropDown(e);
              }}
            >
              <option value="character" className="drop-down-option">
                Character
              </option>
              <option value="planets" className="drop-down-option">
                Planet
              </option>
              <option value="starships" className="drop-down-option">
                Starship
              </option>
              <option value="vehicles" className="drop-down-option">
                Vehicle
              </option>
              <option value="films" className="drop-down-option">
                Film
              </option>
              <option value="species" className="drop-down-option">
                Species
              </option>
            </select>
            <label htmlFor="character-search-input" id="character-search-label">
              Enter a {this.state.selected}'s name:
            </label>
            <input
              name="character_name"
              type="text"
              id="character-search-input"
              value={this.state.input.value}
              onChange={e => {
                this.handleChange(e);
              }}
              required
            />
            <button
              disabled={!this.state.input.touched}
              type="submit"
              id="character-search-button"
            >
              Submit
            </button>
          </section>
        </fieldset>
      </form>
    );
  }
}