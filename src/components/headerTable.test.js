import React from "react";
import { mount } from "enzyme";
import HeaderTable from "./headerTable";

describe("<HeaderTable/>", () => {
  
  const app = mount(<HeaderTable/>);

  it("Renders at least one header", () => {
      expect(app.find(".header").length).toBe(1)
  })

})
