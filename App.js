import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React")

const jsxHeading = <h1 className="head">Hello React using JSX</h1>

const parent = React.createElement("div", {id: "container"}, [heading, jsxHeading])
  
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)