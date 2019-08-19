import React from "react";

export const ProductList = ({ title, children, ...props }) => (
  <div {...props}>
    <h2>{title}</h2>
    <div style={{ display: "flex", borderRadius: 3 }}>{children}</div>
  </div>
);
