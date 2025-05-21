import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Background from "./components/background";
import Heading from "./components/Heading";
import Verification from "./pages/Verification";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AppContainer from "./components/AppContainer";
import { setNavigate } from "./lib/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
  const navigate = useNavigate();
  setNavigate(navigate);
  return (
    <GoogleOAuthProvider clientId="902110353612-vd5vq9jnkafsu65rgrdd7pvv9957krhj.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/verify/email/:code" element={<VerifyEmail />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset" element={<ResetPassword />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
