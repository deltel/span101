import React from "react";
import { shallow } from "enzyme";

import "../../config/enzymeConfig";

import ConjugationGroup from "./ConjugationGroup";

describe("<ConjugationGroup /> component", () => {
  it("renders 1 <ConjugationGroup /> component", () => {
    const component = shallow(<ConjugationGroup />);

    expect(component).toHaveLength(1);
    expect(component.find("div")).toHaveLength(1);
    expect(component.find("TenseButton")).toHaveLength(1);
    expect(component.find("VerbButtonGroup")).toHaveLength(1);
  });
});
