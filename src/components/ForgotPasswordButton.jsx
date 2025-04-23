import { useNavigate } from "react-router-dom";

const ForgotPasswordButton = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="font-chillax font-semibold text-primary underline cursor-pointer"
    >
      {text}
    </button>
  );
};

export default ForgotPasswordButton;
