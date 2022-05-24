import React from "react";
/* import { useNavigate } from "react-router-dom"; */

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

  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div>
        <h1> Cargando.. </h1>{" "}
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-full ">
        <div className="">
          <div className="items-center d-block sticky  ">
            
            <ul className="flex">
              <li className="mr-6"></li>
              <li className="mr-6">
                <img
                  src={image}
                  alt="google"
                  className="w-10 h-10 felx items-left"
                />
              </li>{" "}
              <li className="mr-6">
                <h1> Grafica1 </h1>{" "}
              </li>{" "}
              <li className="mr-6">
                <h1> Grafica2 </h1>{" "}
              </li>{" "}
              <li className="mr-6">
                <h1> Grafica3 </h1>{" "}
              </li>{" "}
              <li className="mr-6">
                <h1> Grafica4 </h1>{" "}
              </li>{" "}
              <li className="mr-6">

                <img
                  alt="myself"
                  src={user.photoURL}
                  className="rounded-full w-10 h-10"
                />
                <p> Hola {user.displayName.split(" ", [1]) || user.email} </p>
                <button className="bg-blue-400 " onClick={handleLogout}>
                  cerar sesion
                </button>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* <a className="bg-blue-200n text-blue"  href="https://www.systemsorion.com/Desperdicios/vistas/indexPrincipal.php">
                                                                                                                                                                                                                                                  {" "}
                                                                                                                                                                                                                                                  Sistemas de desperdicio
                                                                                                                                                                                                                                                </a> */}{" "}
      <div className="bg-white w-auto h-96 "> </div>{" "}
    </>
  );
}
