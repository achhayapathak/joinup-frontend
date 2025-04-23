import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Blurred ellipses matching Figma specs */}
      <div
        className="absolute left-[15%] top-[-10%] h-[1048px] w-[1048px] rounded-full bg-primary/20 blur-[524px]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute right-[-25%] top-[45%] h-[1048px] w-[1048px] rounded-full bg-primary/20 blur-[524px]"
        style={{ transform: "translate(0, -50%)" }}
      />
      <div
        className="absolute bottom-[-15%] left-[35%] h-[1048px] w-[1048px] rounded-full bg-primary/20 blur-[524px]"
        style={{ transform: "translate(-50%, 0)" }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
