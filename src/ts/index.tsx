import { h, render } from "preact";

import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("app");
  render(<App />, target);
});
