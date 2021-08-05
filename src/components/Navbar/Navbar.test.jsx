import React from "react";
import { shallow } from "enzyme";
import "../../config/enzymeConfig";

import Navbar from "./Navbar";

describe("<Navbar /> component", () => {
  it("renders 1 <Navbar /> component", () => {
    const component = shallow(<Navbar />);

    expect(component.find("nav")).toHaveLength(1);
    expect(component.find("img")).toHaveLength(2);
  });
});
