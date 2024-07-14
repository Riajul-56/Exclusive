import React from "react";

const ListItem = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;
