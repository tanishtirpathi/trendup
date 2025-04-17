import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Wrapper from "./components/wrapper";
import Profile from "./components/profile";
import HomePage from "./components/homePage";
import Explore from "./components/explore/explore";
import Premium from "./components/premium/premium";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Wrapper />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
