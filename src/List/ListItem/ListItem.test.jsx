import React from "react";
import { shallow } from "enzyme";
import "../../config/enzymeConfig";

import ListItem from "./ListItem";

describe("<ListItem /> component", () => {
  let component;
  beforeEach(() => {
    const props = {
      word: "One",
    };

    component = shallow(<ListItem {...props} />);
  });

  it("renders one <ListItem /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("li")).toHaveLength(1);
    expect(component.find("NavLink")).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
  });

  it("renders props correctly", () => {
    expect(component.text()).toBe("One");
  });
});
