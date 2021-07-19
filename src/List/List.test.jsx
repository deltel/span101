import React from "react";
import { shallow } from "enzyme";
import "../config/enzymeConfig";

import List from "./List";

describe("<List /> component", () => {
  let component;
  beforeEach(() => {
    const props = {
      fetchMoreData: jest.fn(),
      hasMore: true,
      listElements: [
        { value: "Uno", id: 1 },
        { value: "Dos", id: 2 },
        { value: "Tres", id: 3 },
      ],
    };

    component = shallow(<List {...props} />);
  });

  it("renders one <List /> component", () => {
    expect(component).toHaveLength(1);
    expect(component.find("InfiniteScroll")).toHaveLength(1);
    expect(component.find("ul")).toHaveLength(1);
  });

  it("renders props correctly", () => {
    expect(component.prop("children").props.children).toHaveLength(3);
    expect(component.prop("className")).toBe("List");
  });
});
