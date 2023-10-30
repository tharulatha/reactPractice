import React from 'react';
import ReactDOM from 'react-dom';



const parentObj = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "head" }, "Helloo h1"),
    React.createElement("h2", { id: "head" }, "Helloo h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head" }, "Helloo h1"),
    React.createElement("h2", { id: "head" }, "Helloo h2"),
  ]),
]);
console.log(parentObj);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentObj);
