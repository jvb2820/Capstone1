import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicantLogin from "./pages/ApplicantLogin";
import OfficerLogin from "./pages/OfficerLogin";
import TbiboardLogin from "./pages/TbiboardLogin";
import ManagerLogin from "./pages/ManagerLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/applicant' element={<ApplicantLogin />} />
        <Route path='/officer' element={<OfficerLogin />} />
        <Route path='/tbiboard' element={<TbiboardLogin />} />
        <Route path='/manager' element={<ManagerLogin />} />
      </Routes>
    </Router>
  );
}