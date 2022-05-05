import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
