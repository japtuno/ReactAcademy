import React from "react";

const MyHeader = props => {
  const subtitleHeader = props.subtitle ? <h4>{props.subtitle}</h4> : null;

  return (
    <header>
      <h2 className="title">{props.title}</h2>
      {subtitleHeader}
    </header>
  );
};

export default MyHeader;
