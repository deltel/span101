import React from "react";
import { shallow } from "enzyme";

import "../config/enzymeConfig";
import Form from "./Form";

describe("<Form /> component", () => {
  it("renders 1 <Form /> component", () => {
    const component = shallow(<Form />);

    expect(component).toHaveLength(1);
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("div")).toHaveLength(7);
    expect(component.find(".form-group")).toHaveLength(6);
    expect(component.find(".form-group label")).toHaveLength(6);
    expect(component.find(".form-group input")).toHaveLength(4);
    expect(component.find(".form-group select")).toHaveLength(2);
    expect(component.find("button")).toHaveLength(1);
  });
});
