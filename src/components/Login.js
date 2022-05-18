import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContext";
import image from "../logo_GO.png";

export default function Login() {

  const navigate = useNavigate();
 
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = ({target:{name, value}}) => {
    setUser({...user,[name]: value});
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
        setError("Todos los datos deben estar llenos");
      } else if (error.code === "auth/invalid-email") {
        setError("El email no es válido");
      } else {
      setError(error.message);
      }
    }
    }
  

  return (
    <div style={styles.center} className="mb-4 mt-30 ml-4 ">
      <div className="card">
        <div className="card-body">
          <img src={image} alt="google" style={{ width: "100%" }} />
          { error && <p>{error}</p>}
          <div className="card">
            <div className="card-body">
              <h1 className="text-center card-title">INICIA SESIÓN</h1>
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Usuario</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Ingrese su usuario"
                  />
                  <label htmlFor="exampleInputPassword1">Contraseña</label>
                  <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <button> Entrar </button>
              </form>
            </div>
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