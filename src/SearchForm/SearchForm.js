import React, { Component } from "react";

import AppContext from "../AppContext";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: { value: "" },
      selected: "people"
    };
  }
  static contextType = AppContext;

  handleChange = e => {
    this.setState({
      input: {
        value: e.target.value
      }
    });
  };

  handleDropDown = e => {
    this.setState({
      selected: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.callApi(this.state.selected, this.state.input.value);
  };

  render() {
    return (
      <form
        className="character-search-form"
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <fieldset>
          <legend>Search for your favorite {this.state.selected}!</legend>
          <section className="character-search-container">
            <label>What do you want to search for?</label>
            <select
              name="query"
              className="type-select"
              onChange={e => {
                this.handleDropDown(e);
              }}
            >
              <option value="people" className="drop-down-option">
                People
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
            <label
              htmlFor="character-search-input"
              className="character-search-label"
            >
              Enter a{" "}
              {this.state.selected === "people"
                ? "person"
                : this.state.selected}
              's name:
            </label>
            <input
              name="character_name"
              type="text"
              className="character-search-input"
              value={this.state.input.value}
              onChange={e => {
                this.handleChange(e);
              }}
              required
            />
            <button
              disabled={this.state.input.value === ""}
              type="submit"
              className="character-search-button"
            >
              Submit
            </button>
          </section>
        </fieldset>
      </form>
    );
  }
}
