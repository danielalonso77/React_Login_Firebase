import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import image from "../logo_GO.png";
import Alerts from "./Alerts";

export default function Register() {
  const navigate = useNavigate();

  const { singup } = useAuth();

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
      await singup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        setError("El email ya está en uso");
      } else if (error.code === "auth/invalid-email") {
        setError("El email no es válido");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña es muy débil");
      } else if (error.code === "auth/internal-error") {
        setError("Todos los camps deben estar llenos");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div style={styles.center} className="w-full max-w-xs m-auto ">
      <div className="">
        <div className="bg-white rounded pt-40">
          <img className="objet-fill h-50 w-50" src={image} alt="google" style={{ width: "100%" }} />
          {error && <Alerts message={error} />}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="">
              <h1 className="text-center text-xl font-bold ">REGISTRATE</h1>
              <form className="" onSubmit={handleSubmit}>
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
                  registrate{" "}
                </button>
              </form>
              <div className="text-center text-gray-600 text-xs">
                <a
                  className="text-blue-500 hover:text-blue-600"
                  href="#"
                  onClick={() => navigate("/login")}
                >
                  Ya tengo cuenta, logeame{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style={styles.dark}>
        {" "}
        © 2022 Grupo Ortiz: <a href="https://www.grupo-ortiz.com/"> GO </a>{" "}
      </p>
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
