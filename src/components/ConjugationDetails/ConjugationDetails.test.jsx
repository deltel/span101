import React from "react";
import { shallow } from "enzyme";

import "../../config/enzymeConfig";
import ConjugationDetails from "./ConjugationDetails";

describe("<ConjugationDetails /> component", () => {
  it("renders 1 <ConjugationDetails /> component", () => {
    const component = shallow(<ConjugationDetails />);

    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("p")).toHaveLength(1);
    expect(component.find("Card")).toHaveLength(1);
    expect(component.find("Details")).toHaveLength(1);
  });
});
