import React from "react";
import { shallow } from "enzyme";

import "../../config/enzymeConfig";
import LoginForm from "./LoginForm";

describe("<LoginForm /> component", () => {
  it("renders 1 <LoginForm /> component", () => {
    const props = {
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
      formState: {
        username: "",
        password: "",
      },
    };
    const component = shallow(<LoginForm {...props} />);

    expect(component).toHaveLength(1);
    expect(component.find(".LoginForm")).toHaveLength(1);
    expect(component.find(".prompt")).toHaveLength(1);
    expect(component.find("form")).toHaveLength(1);
    expect(component.find("input")).toHaveLength(2);
    expect(component.find("label")).toHaveLength(2);
    expect(component.find("button")).toHaveLength(1);
  });
});
