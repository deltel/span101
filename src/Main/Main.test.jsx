import React from "react";
import { shallow } from "enzyme";

import "../config/enzymeConfig";
import Main from "./Main";

describe("<Main /> component", () => {
  it("renders 1 <Main /> component", () => {
    const component = shallow(<Main />);

    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("Switch")).toHaveLength(1);
    expect(component.find("Route")).toHaveLength(5);
  });
});
