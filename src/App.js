import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
        <h1>Test Image Rendering</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
