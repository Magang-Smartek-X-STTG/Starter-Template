import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Home from "./Home";

test("cek harus ada <h1> heading 1", () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  expect(container.querySelector("h1")).toBeInTheDocument();
});

test("cek harus ada Home Page", () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  expect(container.querySelector(".title").textContent).toBe("Home Page");
});

test("cek harus ada Data Covid Global", () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  expect(container.querySelector(".data-covid").textContent).toBe(
    "Data Covid Global"
  );
});

test("cek harus ada name", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(container.querySelector("p").textContent).toBe(
      "Heloo my name isLionel Messi"
    );
  });

  test("cek harus ada image", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(container.querySelector("img")).toBeInTheDocument();
  });

