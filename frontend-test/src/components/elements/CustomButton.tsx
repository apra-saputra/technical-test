import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (value?: unknown) => void;
};

const CustomButton = ({ children, className, onClick }: CustomButtonProps) => {
  return (
    <button
      className={`transition-colors duration-300 ease-linear active:text-slate-100 active:border-slate-100 hover:text-slate-300 hover:border-slate-300 cursor-pointer ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
