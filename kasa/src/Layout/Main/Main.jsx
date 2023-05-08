import React from "react";
import "./Main.css";

{
  /* fonction main a qui on donne des enfant pour pouvoir avoir une mise en page plus simple */
}
function Main(props) {
  const children = props.children;

  console.log("children:", children);
  return <div className="main">{...children}</div>;
}
export default Main;
