import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCliente } from "../../../actions/clientes";
import "../../../styles/usuarios/modales/clientemodal.css";

const ClienteCreateModal = ({ open, onClose, addCliente }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const { nombre, apellido, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await addCliente(formData);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <div className="modal-content">
          <h3>Crear Cliente</h3>
          <form className="modal-form" onSubmit={onSubmit}>
            <div className="modal-input">
              <input
                name="nombre"
                value={nombre}
                onChange={onChange}
                placeholder="Nombre"
                required
              />
              <input
                name="apellido"
                value={apellido}
                onChange={onChange}
                placeholder="Apellido"
                required
              />
              <input
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                type="email"
                required
              />
              <input
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Contraseña"
                type="password"
                required
              />
            </div>
            <button type="submit" className="create-button">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ClienteCreateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addCliente: PropTypes.func.isRequired,
};

export default connect(null, { addCliente })(ClienteCreateModal);
