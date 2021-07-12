import React from "react";
import { shallow } from "enzyme";
import "../config/enzymeConfig";

import SearchArea from "./SearchArea";

describe("<SearchArea /> component", () => {
  it("should render 1 <SearchArea /> component", () => {
    const component = shallow(<SearchArea />);

    expect(component).toHaveLength(1);
    expect(component.find("input")).toHaveLength(1);
    expect(component.find("button")).toHaveLength(1);
    expect(component.text()).toBe("Search");
  });
});
