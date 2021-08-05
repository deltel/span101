import React from "react";
import { shallow } from "enzyme";

import "../../../config/enzymeConfig";

import TenseButton from "./TenseButton";

describe("<TenseButton /> component", () => {
  let component;
  const props = {
    handleClick: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<TenseButton {...props} />);
  });

  it("renders 1 <TenseButton /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("select")).toHaveLength(1);
    expect(component.find("option")).toHaveLength(2);
  });

  it("should call handleClick", () => {
    component.simulate("change", { target: { value: "preterite" } });

    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
