
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <div className="App font-bs-font ">
      <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<HomePage/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
