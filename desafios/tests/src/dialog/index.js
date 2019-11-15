import React from "react";
import "./mydialog.css";

function MyDialog(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

export default MyDialog;
