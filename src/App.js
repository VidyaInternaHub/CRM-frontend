import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";
import ProductTools from "./pages/ProductTools";

function App() {
  return (
    <div className="App font-bs-font  overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/tools" element={<ProductTools />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
