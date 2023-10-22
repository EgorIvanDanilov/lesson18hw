//ReactDOM.render(
//  React.createElement("input", {
//    placeholder: "Help text",
//    onClick: () => console.log("Click"),
//    onMouseEnter: () => console.log("Mouse Over"),
//  }),
//  document.getElementById("app"));
const inputClick = () => console.log("Click");
const mouseOver = () => console.log("Mouse Over");
const helpText = "Help text!";

const elements = (
  <div className="name">
    <h1>{helpText}</h1>
    <input
      placeholder={helpText}
      onClick={inputClick}
      onMouseEnter={mouseOver}
    />
    <p>{helpText == "Help text!" ? "Yes" : "No"}</p>
  </div>
);
const app = document.getElementById("app");
ReactDOM.render(elements, app);
