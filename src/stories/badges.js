import React from "react";
import { Badge } from "../primitives";

export const BadgesComponent = ({ content, ...props }) => (
  <div {...props}>
    <Badge> {content}</Badge>
  </div>
);
