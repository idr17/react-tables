import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  it("Renders without crashing", () => {
    const app = mount(<App />);
    expect(app.find(".title").text()).toEqual("Crypto Currency");
  });
});
