import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home.jsx";
import Login from "./components/LoginPage/Login.jsx";
import Signup from "./components/SignupPage/Signup.jsx";
import AdminPage from './Layouts/AdminPage/AdminPage.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/app/*" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
