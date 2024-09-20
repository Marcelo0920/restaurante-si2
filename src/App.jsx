import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cajas from "./pages/Cajas";
import Inventario from "./pages/Inventario";
import Proveedores from "./pages/Proveedores";
import Clientes from "./pages/Clientes";
import Personal from "./pages/Personal";
import Roles from "./pages/Roles";
import Ventas from "./pages/Ventas";

import Cookies from "js-cookie";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

if (Cookies.get("token")) {
  setAuthToken(Cookies.get("token"));
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cajas" element={<Cajas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/proveedores" element={<Proveedores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
