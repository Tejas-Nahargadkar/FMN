import React from "react";
import "./App.css";
import AccountPage from "./components/AccountPage/AccountPage";
import CompanyPage from "./components/CompanyPage/CompanyPage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SubscriptionPage from "./components/SubscriptionPage/SubscriptionPage";
import CEOForm from "./components/WritetoCEO/CEOForm";
import FormH from "./components/FormH/Formh";
import { Routes, Route } from "react-router-dom";
import JobsPage from "./components/Jobs/JobsPage";
import CreateResume from "./components/CreateResume/CreateResume";
import CandidateProfile from "./components/CandidateProfile/CandidateProfile";
import Blogs from "./components/Blogs/Blogs";
import EmployeeLogin from "./components/EmployeeLogin/EmployeeLogin";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AccountPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CompanyPage" element={<CompanyPage />} />
        <Route path="/SubscriptionPage" element={<SubscriptionPage />} />
        <Route path="/FormH" element={<FormH />} />
        <Route path="/JobsPage" element={<JobsPage />} />
        <Route path="/CreateResume" element={<CreateResume />} />
        <Route path="/CandidateProfile" element={<CandidateProfile />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
      </Routes>

      <CEOForm />
    </div>
  );
}

export default App;
