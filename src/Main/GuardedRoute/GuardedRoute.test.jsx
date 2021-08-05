import React from "react";
import { shallow } from "enzyme";

import "../../config/enzymeConfig";
import GuardedRoute from "./GuardedRoute";

describe("<GuardedRoute /> component", () => {
  it("renders 1 <GuardedRoute /> component", () => {
    const props = {
      component: () => <div>Protected</div>,
      isAuth: true,
    };
    const component = shallow(<GuardedRoute {...props} />);

    expect(component).toHaveLength(1);
    expect(component.find("Route")).toHaveLength(1);
  });
});
