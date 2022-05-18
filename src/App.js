import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <div className=" h-screen flex">
      <AuthProvider>
        <Routes>
          <Route path="/" 
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          
          }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};



export default App;
