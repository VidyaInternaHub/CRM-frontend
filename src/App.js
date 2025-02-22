import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from './pages/ForgotPassword'
import SolutionsPage from './pages/SolutionsPage'
import SolutionsLayout from "./components/Solutions/layout/SolutionsLayout";
import Marketing from "./components/Solutions/components/roles/Marketing";
import HrComponent from "./components/Solutions/components/roles/HrComponent";

function App() {
  return (
    <div className="App font-bs-font  overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path="/solutions" element={<SolutionsPage/>} />
          <Route path="/solutions/*" element={<SolutionsLayout/>}>
          
          <Route path="roles/marketing" element={<Marketing/>} />
          <Route path="roles/hr" element={<HrComponent/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
