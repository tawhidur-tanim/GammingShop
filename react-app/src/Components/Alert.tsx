import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
