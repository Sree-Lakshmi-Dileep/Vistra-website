import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import Dblayer1 from "../pages/dblayer1";
import Dblayer2 from "../pages/dblayer2";
import L1Scan from "../pages/l1_scan";

function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dblayer1" element={<Dblayer1/>} />
      <Route path="/dblayer2" element={<Dblayer2/>} />
      <Route path="/l1_scan" element={<L1Scan/>}/>
    </Routes>
  )
}

export default App;
