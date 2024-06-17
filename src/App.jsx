import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Test from "./components/Test/Test";
import Profile from "./components/Profile/Profile";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;