import React from "react";
import ReactDOM from "react-dom/client";
// React Element is obj when we render this element to dom then it become html element
// h1 tag inside react using reactelement
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "namaste_react"
// );
// h1 tag inside jsx 
// jsx (transpiled beforenit reaches the js engine) parcel - Bable(its done by Babel)
// JSX =>   Babel transpile it to React.createElement =>ReactElement is js object =>HTMLElement(render) by Bebel
// const heading = (<h1 className="head" tabIndex="5">namaste React using jsx</h1>
// );
// // above is the normal recat element writeen in jsx
// console.log(heading)

// React functional component


const Title = (
      <h1 className="head">namaste react functional Title1</h1>
);
// both code are same
// component composition
const HeadingComponent = ()=>
<div id="container">
  {Title}
     <h1 className="heading">namaste react functional component</h1>
     </div>
// this is react functional component return jsx

// so const heading code is equalient to const jsx code

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(<HeadingComponent />)