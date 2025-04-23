import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

export const Home = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline text-cyan-400">
    Hello world!
  </h1>
    </div>
  )
} 

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
