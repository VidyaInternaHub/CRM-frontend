import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";
import ProductTools from "./pages/ProductTools";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionsLayout from "./components/Solutions/layout/SolutionsLayout";
import LoginPage from "./pages/LoginPage";
import PricingPage from "./pages/PricingPage";
import Prices from "./pages/Prices"
import SelfHostedPage from "./pages/SelfHostedPage";


function App() {
  return (
    <div className="font-bs-font">
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ProductTools />} />

          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:category/:type" element={<SolutionsLayout />}/>

          <Route path="/pricing" element={<PricingPage /> }  />
          <Route path="/Prices" element={<Prices /> }  />
          <Route path="/selfHost" element={<SelfHostedPage /> }  />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
