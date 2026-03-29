import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Layer1 from '../pages/dblayer1';
import Layer2 from '../pages/dblayer2';
import Report from "../pages/report1";
import Report2 from "../pages/report2";
import Reports from "../pages/reports";

import { useDevicesSubscription } from "./supabase/devices";
import { useFilesSubscription } from "./supabase/files";
import { useScansSubscription } from "./supabase/scans";
import { useUsersSubscription } from "./supabase/users";
import { useReportsSubscription } from "./supabase/reports";



function App() {

  useDevicesSubscription();
  useFilesSubscription();
  useScansSubscription();
  useUsersSubscription();
  useReportsSubscription();

  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dblayer1" element={<Layer1 />} />
        <Route path="/dblayer2" element={<Layer2 />} />
        <Route path="/report1" element={<Report />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/report2" element={<Report2 />} />
      </Routes>
  );
}

export default App;
