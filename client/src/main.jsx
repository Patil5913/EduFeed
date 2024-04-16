import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import AcademicFeedback from "./pages/student/components/AcademicFeedback.jsx";
import NonAcademicFeedback from "./pages/student/components/NonAcademicFeedback.jsx";
import Login from "./pages/login/Login.jsx";
import Student from "./pages/student/Student.jsx";
import Register from "./pages/login/Register.jsx";
import Mentor from "./pages/mentor/page.jsx";
import Authority from "./pages/authority/page.jsx";
import Error from "./pages/errorpage/err.jsx";
import { AuthProvider } from "./store/auth.jsx";
import ForgetPass from "./pages/ForgotPass/ForgetPass.jsx";
import "./index.css";


const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="academic" element={<AcademicFeedback />} />
      <Route path="non-academic" element={<NonAcademicFeedback />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="student" element={<Student />} />
      <Route path="mentor" element={<Mentor />} />
      <Route path="authority" element={<Authority />} />
      <Route path="forgot" element={<ForgetPass />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <Router>{routes}</Router>
    </React.StrictMode>
  </AuthProvider>
);
