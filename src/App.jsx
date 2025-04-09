import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Wrapper from "./components/wrapper";
import HomePage from "./components/homePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Wrapper />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
