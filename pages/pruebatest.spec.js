import React from "react";
import { shallow } from "enzyme";
import PruebaTest from "./pruebatest";

describe("PruebaTestComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PruebaTest />);
  });

  it('should render "hola" on div', () => { //Same as test()
    const text = wrapper.text();
    expect(text).toBe("Hola");
  });
});
