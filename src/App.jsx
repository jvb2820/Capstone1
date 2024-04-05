import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicantLogin from "./pages/ApplicantLogin";
import OfficerLogin from "./pages/OfficerLogin";
import TbiboardLogin from "./pages/TbiboardLogin";
import ManagerLogin from "./pages/ManagerLogin";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import ApplicantForm from "./pages/ApplicantForm";
import ManagerDashboard from "./pages/ManagerDashboard";
import OfficerDashboard from "./pages/OfficerDashboard";
import TbiboardDashboard from "./pages/TbiboardDashboard";
import CapsuleProposal from "./pages/CapsuleProposal";
import MListOfApplicants from "./pages/MListOfApplicants";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/applicant" element={<ApplicantLogin />} />
        <Route path="/officer" element={<OfficerLogin />} />
        <Route path="/tbiboard" element={<TbiboardLogin />} />
        <Route path="/manager" element={<ManagerLogin />} />
        <Route path="/applicantdashboard" element={<ApplicantDashboard />} />
        <Route path="/applicantform" element={<ApplicantForm />} />
        <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route path="/officerdashboard" element={<OfficerDashboard />} />
        <Route path="/tbiboarddashboard" element={<TbiboardDashboard />} />
        <Route path="/capsuleProposal" element={<CapsuleProposal />} />
        <Route path="/mlistofapplicants" element={<MListOfApplicants />} />
        <Route path="/moperationsOfficer" element={<MListOfApplicants />} />
        <Route path="/mtbiBoardEvaluation" element={<MListOfApplicants />} />
      </Routes>
    </Router>
  );
}
