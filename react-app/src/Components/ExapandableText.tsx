import React, { useState } from "react";
import { Button } from "./Button/Button";

interface props {
  children: string;
  maxChars?: number;
}

const ExapandableText = ({ children, maxChars = 100 }: props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = !isExpanded ? children.substring(0, maxChars) : children;

  return (
    <p>
      {" "}
      {text} {!isExpanded && "..."}{" "}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {!isExpanded ? "More" : "Less"}
      </Button>
    </p>
  );
};

export default ExapandableText;
