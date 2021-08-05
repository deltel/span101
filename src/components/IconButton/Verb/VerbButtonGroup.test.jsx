import React from "react";
import { shallow } from "enzyme";

import "../../../config/enzymeConfig";
import VerbButtonGroup from "./VerbButtonGroup";

describe("<VerbButtonGroup /> component", () => {
  let component;
  const props = {
    activeIcon: "ar",
    handleClick: jest.fn(),
  };
  beforeEach(() => {
    component = shallow(<VerbButtonGroup {...props} />);
  });

  it("renders 1 <VerbButtonGroup /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("button")).toHaveLength(3);
  });

  it("calls handleClick prop", () => {
    component.find(".ar-icon").simulate("click");
    component.find(".er-icon").simulate("click");
    component.find(".ir-icon").simulate("click");

    expect(props.handleClick).toHaveBeenCalledTimes(3);
  });
});
