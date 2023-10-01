//Assets
"use client";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export interface ITextInput {
  id: string;
  isRequired?: boolean;
  name: string;
  type: "text" | "textarea" | "password";
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel?: string;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  width?: string;
}

const TextInput = (props: ITextInput) => {
  const {
    id,
    label,
    isRequired,
    name,
    type = "text",
    onChange,
    value,
    placeholder,
    ariaLabel,
    pattern,
    maxLength,
    minLength,
    readOnly,
    autoFocus,
    onClick,
    onKeyPress,
    className,
    icon,
    width,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-base font-light text-mainOrange"
        >
          {label}
          {isRequired && (
            <span className="pl-1 text-lg text-mainOrange">*</span>
          )}
        </label>
      )}
      <div>
        {type === "password" && (
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {!showPassword ? (
              <AiOutlineEyeInvisible className="text-3xl text-white" />
            ) : (
              <AiOutlineEye className="text-3xl text-white" />
            )}
          </div>
        )}
        {icon && type !== "password" && (
          <div
            onClick={onClick}
            className={`absolute right-2 top-1/2 -translate-y-1/2 transform ${
              onClick ? "cursor-pointer" : ""
            } `}
          >
            {icon}
          </div>
        )}
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : "text"
          }
          id={id}
          className={`block ${
            width ? width : "w-full"
          } rounded-lg border border-gray-200 bg-transparent p-2.5 py-3 text-base text-black focus:border-mainOrange`}
          placeholder={placeholder}
          required
          name={name}
          onChange={onChange}
          value={value}
          aria-label={ariaLabel}
          pattern={pattern}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          autoFocus={autoFocus}
          style={{ outline: "none" }}
          onKeyDown={onKeyPress}
        />
      </div>
    </div>
  );
};

export default TextInput;
