/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import image from "../logo_GO.png";
import { useAuth } from "../context/authContext";


export default function Home() {
  /* const authContext = useAuth();
  console.log(authContext); */

 /*  const navigate = useNavigate(); */

  const {user, logout, loading} = useAuth();
  console.log(user);

  const handleLogout = async () => {
    await logout();
    //navigate("/login");
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={styles.center} className="mb-4 mt-30 ml-4 ">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <img src={image} alt="google" style={{ width: "25%" }} />
              <p>Hola {user.email}</p>
                <button onClick={handleLogout} >salir</button>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROTxB__Qy90_0nFS0MGAu4gWpp386rv0yPLNoNckj8oXPuiPeyXRDA_aw0tGqiSgXnWzVMYbXGQ0Yg/pubchart?oid=356344706"
        frormat="interactive"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
      <div>
        <div>
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
