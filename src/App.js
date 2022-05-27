import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";
import Grafica1 from "./graficas/Grafica1";
import Grafica2 from "./graficas/Grafica2";
import Grafica3 from "./graficas/Grafica3";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
                <div className="bg-pink-200">

                </div>
              <Home/>
            </ProtectedRoutes>
          }
        />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/grafics1" element={<Grafica1/>} />{" "}
        <Route path="/grafics2" element={<Grafica2/>} />{" "}
        <Route path="/grafics3" element={<Grafica3/>} />{" "}
      </Routes>{" "}
    </AuthProvider>
  );
};

export default App;
