import React from "react";
import { shallow } from "enzyme";

import "../config/enzymeConfig";
import Card from "./Card";

describe("<Card /> component", () => {
  let component;
  const props = {
    title: "Title",
    children: <span>Children</span>,
  };
  beforeEach(() => {
    component = shallow(<Card {...props} />);
  });
  it("renders 1 <Card /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(3);
  });

  it("renders props correctly", () => {
    expect(component.find(".title").text()).toBe("Title");
    expect(component.find(".content").text()).toBe("Children");
  });
});
