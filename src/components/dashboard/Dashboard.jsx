import React from "react";

import { FaCashRegister } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { BsPersonBadgeFill } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

import "../../styles/dashboard/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul className="dashboard-ul">
        <li>
          <Link to="/" className="dashboard-li-component">
            <IoHomeSharp />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/cajas" className="dashboard-li-component">
            <FaCashRegister />
            <span>Cajas</span>
          </Link>
        </li>
        <li>
          <Link to="/inventario" className="dashboard-li-component">
            <MdOutlineInventory />
            <span>Inventario</span>
          </Link>
        </li>
        <li>
          <Link to="/ventas" className="dashboard-li-component">
            <IoCashOutline />
            <span>Ventas</span>
          </Link>
        </li>
        <li>
          <Link to="/proveedores" className="dashboard-li-component">
            <FaPersonRays />
            <span>Proveedores</span>
          </Link>
        </li>
        <li>
          <Link to="/clientes" className="dashboard-li-component">
            <IoPerson />
            <span>Clientes</span>
          </Link>
        </li>
        <li>
          <Link to="/personal" className="dashboard-li-component">
            <BsPersonBadgeFill />
            <span>Personal</span>
          </Link>
        </li>
        <li>
          <Link to="/roles" className="dashboard-li-component">
            <BsPatchCheckFill />
            <span>Roles</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="dashboard-li-component">
            <MdLogout />
            <span>Cerrar Sesion</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
