import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Reports/Home";
import NetIncome from "./Reports/NetIncome";
import TotalRevenue from "./Reports/TotalRevenue";
import TotalShEquity from "./Reports/TotalShEquity";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netincome" element={<NetIncome />} />
          <Route path="/totalrevenue" element={<TotalRevenue />} />
          <Route path="/totalshareholderequity" element={<TotalShEquity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
