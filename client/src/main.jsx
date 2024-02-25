import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AcademicFeedback from "./pages/student/components/AcademicFeedback.jsx";
import NonAcademicFeedback from "./pages/student/components/NonAcademicFeedback.jsx";
import Login from "./pages/login/Login.jsx";
import Student from "./pages/student/page.jsx";
import Register from "./pages/login/Register.jsx";
import Mentor from "./pages/mentor/page.jsx";
import Authority from "./pages/authority/page.jsx";
import Error from "./pages/errorpage/err.jsx"
const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="*" element={<Error />} />  
    <Route path="/academic" element={<AcademicFeedback />} />
    <Route path="/non-academic" element={<NonAcademicFeedback />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/student" element={<Student />} />
    <Route path="/mentor" element={<Mentor />} />
    <Route path="/authority" element={<Authority />} />
  </>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
