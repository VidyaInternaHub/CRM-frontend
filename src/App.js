
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from './pages/ForgotPassword'
import LoginPage from './pages/LoginPage';
import SolutionsPage from "./pages/SolutionsPage";
import PricingPage from "./pages/PricingPage";
function App() {
  return (
    <div className="App font-bs-font  overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/solutions" element={<SolutionsPage/>} />
          <Route path="/pricing" element={<PricingPage /> }  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
