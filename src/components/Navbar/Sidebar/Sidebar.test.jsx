import React from "react";
import { shallow } from "enzyme";

import "../../../config/enzymeConfig";
import Sidebar from "./Sidebar";

describe("<Sidebar /> component", () => {
  it("renders 1 <Sidebar /> component", () => {
    const component = shallow(<Sidebar />);

    expect(component).toHaveLength(1);
    expect(component.find("ul")).toHaveLength(1);
    expect(component.find("nav")).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("NavLink")).toHaveLength(4);
    expect(component.find("li")).toHaveLength(4);
  });
});
