import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Background from "./components/background";
import Heading from "./components/Heading";
import Verification from "./pages/Verification";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

export const Home = () => {
  return (
    <Background>
      <div className="flex justify-center mt-12">
      <Heading text={"JoinUp"} />
      </div>
    </Background>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/verify/email/:code" element={<VerifyEmail />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
