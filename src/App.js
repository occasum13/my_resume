import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Work from "./pages/Work";


function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" selected element ={<Home />} />
      <Route path="info" element={<Info />} />
      <Route path="work" element={<Work />} /> 
      </Routes>
      </Router>
      </div>
  )
}

export default App;
