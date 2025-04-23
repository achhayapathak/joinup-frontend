import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Background from "./components/background";
import Heading from "./components/Heading";

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
    </Routes>
  );
}

export default App;
