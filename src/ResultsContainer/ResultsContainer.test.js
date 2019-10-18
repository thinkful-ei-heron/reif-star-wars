import React from "react";
import Enzyme, { mount } from "enzyme";
import App from "../App/App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Stuff gets rendered", () => {
  it("renders the ResultsContainer", () => {
    const component = mount(<App />);
    expect(component.exists(".results-container")).toEqual(true);
  });
  it("renders with correct default text", () => {
    const component = mount(<App />);
    const target = component.find(".default-results-text");
    expect(target.text()).toEqual("Enter a name and hit submit!");
  });
  it("renders reults...!?", () => {
    const component = mount(<App />);
    component.setState({
      characterData: {
        results: [
          {
            name: "Luke Skywalker",
            url: "https://swapi.co/api/people/1/"
          }
        ]
      }
    });
    component.update();
    const target = component
      .find(".results-container")
      .children()
      .text();
    expect(target).toEqual("Luke Skywalker");
    // FIX this will need to change when I change the results display
  });
});
