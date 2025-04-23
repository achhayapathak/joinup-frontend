import React, { useState } from "react";

const InputField = ({
  label,
  placeholder,
  type = "text",
  showPassword,
  value,
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-row items-center gap-1 w-full max-w-[632px] py-2">
      <label className="font-chillax text-xl font-medium">{label}</label>
      <div className="flex flex-row items-center gap-2.5 flex-1 border-b border-black">
        <input
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pb-0 font-chillax text-xl font-normal text-black/50 placeholder:text-black/50 focus:outline-none bg-transparent"
        />
        {showPassword && (
          <button
            onClick={handleTogglePassword}
            className="p-1 focus:outline-none cursor-pointer"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isPasswordVisible ? (
                <>
                  <path
                    d="M12 5.24951C4.5 5.24951 1.5 12.0095 1.5 12.0095C1.5 12.0095 4.5 18.7495 12 18.7495C19.5 18.7495 22.5 12.0095 22.5 12.0095C22.5 12.0095 19.5 5.24951 12 5.24951Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.7495C14.0711 15.7495 15.75 14.0706 15.75 11.9995C15.75 9.92836 14.0711 8.24951 12 8.24951C9.92893 8.24951 8.25 9.92836 8.25 11.9995C8.25 14.0706 9.92893 15.7495 12 15.7495Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
