import React, { useState } from "react";

import "../../../styles/usuarios/modales/clientemodal.css";

const ClienteCreateModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <div className="modal-content">
          <h3>Crear Cliente</h3>
          <form className="modal-form">
            <div className="modal-input">
              <input placeholder="Nombre Cliente" />
              <input placeholder="Nit" />
            </div>
            <button className="create-button">Crear</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClienteCreateModal;
