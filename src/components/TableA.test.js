import React from "react"
import { mount } from "enzyme"
import TableA from "./TableA"

describe("<TableA/>", () => {

  const app = mount(<TableA/>)

  it("Renders without crashing", () => {
    expect(app.length).toEqual(1)
  })

  describe("The default UI", () => {
    it("Renders default one component tables", () => {
      expect(app.find(".eachTable").length).toBe(1)
    })
  })
  
})