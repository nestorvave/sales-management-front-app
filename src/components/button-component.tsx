interface IButton {
  label: string;
  variant: "main" | "main-outlined";
  icon?: React.ReactNode;
  onClick: () => void;
  customStyles?: string;
  id: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  variant = "main",
  onClick,
  icon,
  customStyles,
  id,
  disabled = false,
}: IButton) => {
  let bgColor = "bg-mainOrange";
  let textColor = "text-black";
  let hoverBgColor = "hover:bg-yellow-400";
  let borderColor = "border-transparent";

  switch (variant) {
    case "main-outlined":
      bgColor = "bg-transparent";
      textColor = "text-mainOrange";
      borderColor = "border border-mainOrange";
      hoverBgColor = "hover:bg-mainOrange hover:text-white";
      break;
    default:
      break;
  }

  const defaultClasses = "py-2 text-base font-medium px-4 rounded-lg h-auto";
  const solidButtonClasses = `${defaultClasses} ${bgColor} ${textColor} ${borderColor} ${hoverBgColor}  font-medium`;
  const disabledButtonClasses = `${defaultClasses} bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed pointer-events-none opacity-50 px-5 py-2.5 font-medium`;
  const buttonClasses = disabled ? disabledButtonClasses : solidButtonClasses;
  return (
    <button
      className={`${buttonClasses} ${customStyles} transition-colors w-full`}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};
