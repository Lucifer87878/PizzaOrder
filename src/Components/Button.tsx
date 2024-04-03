import "./sass/_buttons.scss";
import React from "react";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string; // Använd en props för att ta emot texten för knappen
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className='CheckoutBtn' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
