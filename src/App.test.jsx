import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
