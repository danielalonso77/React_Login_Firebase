import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import image from "../logo_GO.png";
import Alerts from "../components/Alerts.js";

export default function Login() {
  const navigate = useNavigate();

  const { login, loginWithGoogle } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(user);
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        setError("La contraseña no es correcta");
      } else if (error.code === "auth/user-not-found") {
        setError("El usuario no existe");
      } else if (error.code === "auth/internal-error") {
        setError("Todos los campos deben estar llenos");
      } else if (error.code === "auth/invalid-email") {
        setError("El email no es válido");
      }else if (error.code === "auth/cancelled-popup-reques") {
        setError("Ventana emergente cerrada");
      } else {
        setError(error.message);
      }
    }
  };

  const handleGoogleSingin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.code);
    }
  };




  return (
    <div style={styles.center} className="w-full max-w-xs m-auto ">
      <div className="">
        <div className="bg-white rounded pt-25 ">
          <img
            className="objet-fill h-50 w-50"
            src={image}
            alt="google"
            style={{ width: "100%" }}
          />
          {error && <Alerts message={error} />}
          <div className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5">
            
             {/*  <h1 className="text-center text-xl font-bold ">INICIA SESIÓN</h1> */}
              {/* <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="exampleInputEmail1"
                  >
                    Usuario
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Ingrese su usuario"
                  />
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="exampleInputPassword1"
                  >
                    Contraseña
                  </label>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  {" "}
                  Entrar{" "}
                </button>
              </form> */}
              <div>
               {/*  <div className="text-center text-gray-600 text-xs mb-2">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => navigate("/register")}
                  >
                    No tengo cuenta, registrarme
                  </a>
                </div> */}
                <button
                  onClick={handleGoogleSingin}
                  type="button"
                  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-4 mb-4"
                >
                  <svg
                    className="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Inicia sesion con Google
                </button>
              </div>
            
          </div>
          <p style={styles.dark}>
          {" "}
          © 2022 Grupo Ortiz: <a href="https://www.grupo-ortiz.com/">
            {" "}
            GO{" "}
          </a>{" "}
        </p>
        </div>
        
      </div>
    </div>
  );
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  },
  dark: {
    color: "#fc6c26",
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "200px",
    marginBottom: "10px",
  },
};
