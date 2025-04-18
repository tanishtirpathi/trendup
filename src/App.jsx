import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wrapper from "./pages/wrapper";
import Profile from "./pages/profile";
import HomePage from "./pages/homePage";
import Explore from "./pages/explore/explore";
import Premium from "./pages/premium/premium";
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
