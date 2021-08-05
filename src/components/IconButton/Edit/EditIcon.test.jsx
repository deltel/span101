import React from "react";
import { shallow } from "enzyme";

import "../../../config/enzymeConfig";
import EditIcon from "./EditIcon";

describe("<EditIcon /> component", () => {
  it("render 1 <EditIcon /> component", () => {
    const component = shallow(<EditIcon />);

    expect(component).toHaveLength(1);
    expect(component.find("Link")).toHaveLength(1);
    expect(component.find("img")).toHaveLength(1);
  });
});
