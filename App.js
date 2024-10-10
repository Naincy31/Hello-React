import React from "react";
import ReactDOM from "react-dom/client"

const Heading = () => <h1 id="heading">Hello World from React</h1>

const jsxHeading = <h1 className="head">Hello React using JSX</h1>

//React Component
const Parent = () => (<div>
    <Heading/>
    {jsxHeading}
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Parent/>)