import React from "react";

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2.5 px-6 py-3 rounded-[40px] font-chillax text-base leading-[1.4em] transition-all duration-200 hover:scale-110";

  const variantClasses = {
    primary:
      "bg-gradient-to-b from-white to-[#7C7C7C] text-black shadow-[1px_0px_10px_0px_rgba(0,0,0,0.15),inset_2px_2px_30px_0px_rgba(124,124,124,0.6)]",
    secondary:
      "text-[#09D3CD] hover:shadow-[1.9px_1.9px_10px_0px_rgba(0,0,0,0.14),inset_2px_2px_30px_0px_rgba(9,211,205,0.6)]",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100"
    : "cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
