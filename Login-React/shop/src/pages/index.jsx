import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import Login from "./login";
import Protected from "./protected";
import ProtectedRoutes from "../components/protected/ProtectedRoutes";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={
        <ProtectedRoutes>
          <Protected />
        </ProtectedRoutes>
      } />
    </Routes>
  );
}
