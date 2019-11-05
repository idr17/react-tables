import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  
  const app = mount(<App />);

  it("Renders without crashing", () => {
    expect(app.find(".title").text()).toEqual("Crypto Currency")
  })

  describe("The default UI", () => {
    it("Renders two default tables", () => {
      expect(app.find(".eachTable").length).toBe(2)
    })
  })
})
