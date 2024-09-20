import React, { useState } from "react";
import PersonalItem from "./PersonalItem";

import PersonalCreateModal from "../modales/PersonalCreateModal";
import PersonalEditModal from "../modales/PersonalEditModal";
import PersonalDeleteModal from "../modales/PersonalDeleteModal";

import "../../../styles/usuarios/personal/personalpage.css";

const PersonalPage = () => {
  const [openCreateModal, setCreateOpenModal] = useState(false);
  const [openEditModal, setEditOpenModal] = useState(false);
  const [openDeleteModal, setDeleteOpenModal] = useState(false);

  function handleCreateModal() {
    setCreateOpenModal(!openCreateModal);
  }

  function handleDeleteModal() {
    console.log("holaa");
    setDeleteOpenModal(!openDeleteModal);
  }

  function handleEditModal() {
    setEditOpenModal(!openEditModal);
  }

  return (
    <>
      <PersonalCreateModal
        open={openCreateModal}
        onClose={() => setCreateOpenModal(false)}
      />

      <PersonalEditModal
        open={openEditModal}
        onClose={() => setEditOpenModal(false)}
      />
      <PersonalDeleteModal
        open={openDeleteModal}
        onClose={() => setDeleteOpenModal(false)}
      />

      <div className="personal-page">
        <h2 className="personal-page-h2">Nuestro Personal</h2>
        <div className="personal-page-control-buttons">
          <input placeholder="Buscar Personal" />
          <button onClick={handleCreateModal}>Crear</button>
        </div>
        <div className="personal-list">
          <div className="personal-grid personal-header">
            <span>Id</span>
            <span>Nombre</span>
            <span>Codigo</span>
            <span>Area</span>
            <span>Rol</span>
            <span>Acciones</span>
          </div>

          <div className="personal-items">
            <PersonalItem
              id="01"
              nombre="Marcelo Vargas Avila"
              codigo="2985267"
              area="caja"
              rol="empleado"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
            <PersonalItem
              id="02"
              nombre="Ana Perez Lopez"
              codigo="3456789"
              area="caja"
              rol="empleado"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
            <PersonalItem
              id="03"
              nombre="Carlos Gomez Rodriguez"
              codigo="5678901"
              area="caja"
              rol="empleado"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
