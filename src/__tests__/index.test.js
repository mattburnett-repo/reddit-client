import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import App from "../App";
import store from '../stateManagement/store.js';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><Provider store={store}><App /></ Provider></React.StrictMode>, div);
  });
});