import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetPage from "./BudgetPage";
import ResourcesPage from "./Resourcespage";
import AboutPage from "./AboutPage";
import Home from "./Home";
import Transactions from "./Transactions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Budget" element={<BudgetPage />} />
          <Route path="/Resources" element={<ResourcesPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
