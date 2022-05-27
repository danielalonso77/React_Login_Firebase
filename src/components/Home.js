import React, { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

//importar el compontente de UI transicion
import { Transition } from "@headlessui/react";
import image from "../logo_GO.png";
import { useAuth } from "../context/authContext";

//importcion de los componentes
/* import Grafica1 from "../graficas/Grafica1";
import Grafica2 from "../graficas/Grafica2";
import Grafica3 from "../graficas/Grafica3"; */

export default function Home() {
  /* const authContext = useAuth();
                console.log(authContext); */

  /* const navigate = useNavigate(); */

  const [open, setOpen] = useState(false);

  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    if (open) {
      document.getElementById("tabOpen").hidden = true;
      setOpen(false);
    } else {
      setOpen(true);
      document.getElementById("tabOpen").hidden = false;
    }
  };

  function Ventanita() {
    return (
      <div className="bg-pink-200">
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <img src={image} className="h-16 w-16" alt="logo" />
            </div>
            <h1 className="text-center text-2xl font-bold">
              Bienvenido {user.name}
            </h1>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1> Cargando.. </h1>
      </div>
    );
  }

  return (
    <>
      <nav className="flex px-6 h-16 bg-blue-400 text-gray-700 border-b border-gray-200 z-10">
        <ul className="flex mr-48">
          <li className="mr-6">
            <img
              src={image}
              alt="google"
              className="bg-blue-400 w-10 h-10 felx"
            />
          </li>
          <li className="mr-6">
            <h1>
              {" "}
              <a href="/grafics1">Grafica1</a>{" "}
            </h1>
          </li>
          <li className="mr-6">
            <h1>
              {" "}
              <a href="/grafics2">Grafica2</a>{" "}
            </h1>
          </li>
          <li className="mr-6">
            <h1>
              {" "}
              <a href="/grafics3">Grafica3</a>{" "}
            </h1>
          </li>
          <li className="mr-6">
            <h1> Grafica4 </h1>
          </li>
        </ul>

        <ul className="flex">
         
          <li className="ml-6">
            <p className="text-xs ml-6">
              {" "}
              Hola {user.displayName.split(" ", [1]) || user.email}{" "}
            </p>
          </li>
          <ul id="tabOpen" className="bg-white ">
            <li id="tabOpen" className="bg.white">
              <button
                className="bg-blue-600 hover:bg-blue-800 hover:text-slate-100 rounded-lg text-s mb-1 px-2"
                onClick={handleLogout}
              >
                cerar sesion
              </button>
            </li>
          </ul>
          <li className="ml-6 px-10">
            <img
              alt="myself"
              src={user.photoURL}
              onClick={() => handleOpen()}
              className="rounded-full w-10 h-10"
            />
          </li>
        </ul>
      </nav>
      {/* <a className="bg-blue-200n text-blue"  href="https://www.systemsorion.com/Desperdicios/vistas/indexPrincipal.php">
                                                                                                                                                                                                                                                  {" "}
                                                                                                                                                                                                                                                  Sistemas de desperdicio
                                                                                                                                                                                                                                                </a> */}{" "}
    </>
  );
}
