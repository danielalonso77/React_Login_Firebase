import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      /* const correo = currentUser.email;
      console.log(correo); */
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSuscribe();
  },[]);

  const loginWithGoogle = () =>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
    
  }

 
  return (
    <authContext.Provider value={{ singup, login, user, logout, loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
