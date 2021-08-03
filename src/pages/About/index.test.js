import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import About from "./About";

test("cek harus ada <h1> heading 1", () => {
  const { container } = render(
    <Router>
      <About />
    </Router>
  );
  expect(container.querySelector("h1")).toBeInTheDocument();
});

test("cek harus ada About Page", () => {
  const { container } = render(
    <Router>
      <About />
    </Router>
  );
  expect(container.querySelector("h1").textContent).toBe("About Page");
});
