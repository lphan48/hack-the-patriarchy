import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetPage from "./BudgetPage";
import ResourcesPage from "./Resourcespage";
import AboutPage from "./AboutPage";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Budget" element={<BudgetPage />} />
          <Route path="/Resources" element={<ResourcesPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <BudgetPage /> */}
    </div>
  );
}

export default App;
