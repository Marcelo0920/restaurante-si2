import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import heroLogin from "../assets/heroLogin.jpg";

import "react-toastify/dist/ReactToastify.css";
import "../styles/login/login.css";
import ButtonLoader from "../components/loaders/ButtonLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /* useEffect(() => {
    if (error == "Bad Login") {
      toast.error("Error al iniciar sesion", { theme: "light" });
    }
  }, [error]); */

  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    //login(email, password);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //redirecting if logged
  /*  if (isAuthenticated) {
        return <Navigate to="/" replace />;
      } */

  return (
    <div>
      <div className="login">
        <ToastContainer />
        <section className="loginFormular">
          <form className="loginFormularInputs" onSubmit={(e) => onSubmit(e)}>
            <h1>Iniciar Sesión</h1>
            <p>Maneja tu restaurante como los profionales en el mercado</p>
            <div className="formularInput">
              <p>Email</p>
              <div className="inputIcon">
                <MdEmail />
                <input
                  placeholder="Ingresa tu direccion de correo"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => onChange(e)}
                  name="email"
                />
              </div>
            </div>
            <div className="formularInput">
              <p>Contraseña</p>
              <div className="inputIcon">
                <FaLock />
                <input
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <button className="buttonLogin" type="submit" value="Login">
              {/* {loading ? <ButtonLoader /> : "Iniciar Sesión"} */}
              <ButtonLoader />
            </button>
          </form>
        </section>
        <div className="heroLoginContainer">
          <img className="heroLogin" src={heroLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
