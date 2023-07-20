import React, { useState } from "react";

type FloatingLabelInputProps = {
  label: string;
  type?: string;
  input: string;
  setInput: (newValue: string) => void;
  className?: string;
};

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
  className,
  input,
  setInput,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={`relative ${className ? className : ""}`}>
      <input
        type={type}
        value={input}
        onChange={handleChange}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="block w-full px-4 py-2 h-18 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
      />
      <label
        className={`${
          input || isHovered ? "top-[-30%]" : "top-1/4"
        } left-4 z-10 px-1 text-sm transition-all duration-200 ease-in-out absolute ${
          input || isHovered ? "text-primary bg-white" : "text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
