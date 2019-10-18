import React from "react";
import Enzyme, { mount } from "enzyme";
import SearchForm from "./SearchForm";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Stuff gets rendered", () => {
  it("renders the SearchForm", () => {
    const component = mount(<SearchForm />);
    expect(component.exists(".character-search-form")).toEqual(true);
  });
  it("contains a drop down menu", () => {
    const component = mount(<SearchForm />);
    expect(component.exists(".type-select")).toEqual(true);
  });
  it("drop down deftauls to people", () => {
    const component = mount(<SearchForm />);
    const select = component
      .find(".drop-down-option")
      .first()
      .props().value;
    expect(select).toEqual("people");
  });
});
