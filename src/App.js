import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/homeComponents/navComponents/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App font-bs-font w-screen mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
