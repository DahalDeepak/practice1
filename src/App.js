// import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Profile from "./components/Profile/Profile";
import User from "./components/User/User";
import Marketing from "./components/Merket/Marketing";
import Queris from "./components/Query/Queris";
import Documents from "./components/Documents/Document";
import Customize from "./components/Customize/Customized";
import Help from "./components/Help/HelpCenter";
import Setting from "./components/Setting/Setting";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login1 from "./components/Login/Login1";
import Signup1 from "./components/SignUp/Signup1";
import Reset1 from "./components/Reset/Reset1";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MyApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Reset">
                  Reset
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signup1" element={<Signup1 />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/Reset1" element={<Reset1 />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/User" element={<User />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Qurey" element={<Queris />} />
        <Route path="/Document" element={<Documents />} />
        <Route path="/Customize" element={<Customize />} />
        <Route path="/Helped" element={<Help />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
