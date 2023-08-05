import React from "react";

interface props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, color = "primary", onClick }: props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={(event) => onClick()}>
        {children}
      </button>
    </>
  );
};
