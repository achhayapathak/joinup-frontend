import React from "react";

const Spinner = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
  isLoading = false,
}) => {
  const baseClasses =
    "flex items-center justify-center gap-2.5 px-6 py-3 rounded-[40px] font-chillax text-base leading-[1.4em] transition-all duration-200 hover:bg-primary/60 hover:bg-none";

  const variantClasses = {
    primary:
      "bg-gradient-to-b from-white to-[#7C7C7C] text-black shadow-[1px_0px_10px_0px_rgba(0,0,0,0.15),inset_2px_2px_30px_0px_rgba(124,124,124,0.6)]",
    secondary:
      "text-[#09D3CD] hover:shadow-[1.9px_1.9px_10px_0px_rgba(0,0,0,0.14),inset_2px_2px_30px_0px_rgba(9,211,205,0.6)]",
  };

  const disabledClasses =
    disabled || isLoading
      ? "opacity-50 cursor-not-allowed hover:scale-100"
      : "cursor-pointer";

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
