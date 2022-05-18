import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContext";
import image from "../logo_GO.png";

export default function Register() {

  const navigate = useNavigate();
 
  const { singup } = useAuth();

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
              <h1 className="text-center card-title">REGISTRATE</h1>
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
                <button> Registrar </button>
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
