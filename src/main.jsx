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

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />  
    <Route path="/academic" element={<AcademicFeedback />} />
    <Route path="/non-academic" element={<NonAcademicFeedback />} />
    <Route path="/login" element={<Login />} />
    <Route path="/student" element={<Student />} />
  </>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
