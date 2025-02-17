
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from './pages/ForgotPassword'
import SolutionsPage from "./pages/SolutionsPage";

function App() {
  return (
    <div className="App font-bs-font  overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path="/solutions" element={<SolutionsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
