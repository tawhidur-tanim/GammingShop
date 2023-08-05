import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface props {
  onClick?: () => void;
}

export const Like = ({ onClick }: props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    if (onClick) onClick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );

  return (
    <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle}></AiOutlineHeart>
  );
};
