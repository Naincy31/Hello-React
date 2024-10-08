const heading = React.createElement("h1", {id: "heading"}, "Hello World from React")

const para = React.createElement("p", {}, "I'm the sibling of the h1 tag")

const parent = React.createElement("div", {id: "parent"}, [heading, para])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)