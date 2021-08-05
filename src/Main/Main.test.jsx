import React from "react";
import { shallow } from "enzyme";

import "../config/enzymeConfig";
import Main from "./Main";

describe("<Main /> component", () => {
  it("renders 1 <Main /> component for unauthenticated user", () => {
    const props = {
      isAuth: false,
      handleAuth: jest.fn(),
    };
    const component = shallow(<Main {...props} />);

    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("Switch")).toHaveLength(1);
    expect(component.find("Route")).toHaveLength(5);
    expect(component.find("GuardedRoute")).toHaveLength(2);
  });

  it("renders 1 <Main /> component for authenticated user", () => {
    const props = {
      isAuth: true,
      handleAuth: jest.fn(),
    };
    const component = shallow(<Main {...props} />);

    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("Switch")).toHaveLength(1);
    expect(component.find("Route")).toHaveLength(4);
    expect(component.find("GuardedRoute")).toHaveLength(2);
  });
});
