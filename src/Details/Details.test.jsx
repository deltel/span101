import React from "react";
import { shallow } from "enzyme";

import "../config/enzymeConfig";
import Details from "./Details";

describe("<Details /> component", () => {
  const mockObject = {
    label: "value",
  };

  it("renders 1 <Details /> component", () => {
    const props = {
      content: mockObject,
      footerContent: mockObject,
    };
    const component = shallow(<Details {...props} />);

    expect(component).toHaveLength(1);
    expect(component.find(".content")).toHaveLength(1);
    expect(component.find(".content div")).toHaveLength(1);
    expect(component.find(".content span")).toHaveLength(2);

    expect(component.find(".footer")).toHaveLength(1);
    expect(component.find(".footer div")).toHaveLength(1);
    expect(component.find(".footer span")).toHaveLength(2);
  });

  it("should not render a footer div", () => {
    const props = {
      content: mockObject,
    };
    const component = shallow(<Details {...props} />);

    expect(component.find(".footer")).toHaveLength(0);
  });
});
