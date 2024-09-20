import React, { useState } from "react";
import ClienteItem from "./ClienteItem";
import "../../../styles/usuarios/clientes/clientespage.css";
import ClienteCreateModal from "../modales/ClienteCreateModal";
import ClienteEditModal from "../modales/ClienteEditModal";
import ClienteDeleteModal from "../modales/ClienteDeleteModal";

const ClientesPage = () => {
  const [openCreateModal, setCreateOpenModal] = useState(false);
  const [openEditModal, setEditOpenModal] = useState(false);
  const [openDeleteModal, setDeleteOpenModal] = useState(false);

  function handleCreateModal() {
    setCreateOpenModal(!openCreateModal);
  }

  function handleDeleteModal() {
    setDeleteOpenModal(!openDeleteModal);
  }

  function handleEditModal() {
    setEditOpenModal(!openEditModal);
  }

  return (
    <>
      <ClienteCreateModal
        open={openCreateModal}
        onClose={() => setCreateOpenModal(false)}
      />

      <ClienteEditModal
        open={openEditModal}
        onClose={() => setEditOpenModal(false)}
      />
      <ClienteDeleteModal
        open={openDeleteModal}
        onClose={() => setDeleteOpenModal(false)}
      />

      <div className="clientes-page">
        <h2 className="clientes-page-h2">Nuestros Clientes</h2>
        <div className="clientes-page-control-buttons">
          <input placeholder="Buscar Cliente" />
          <button className="create-button" onClick={handleCreateModal}>
            Crear
          </button>
        </div>
        <div className="clientes-list">
          <div className="clientes-grid clientes-header">
            <span>Id</span>
            <span>Nombre</span>
            <span>Nit</span>
            <span>Acciones</span>
          </div>

          <div className="clientes-items">
            <ClienteItem
              id="01"
              nombre="Marcelo Vargas Avila"
              nit="2985267"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
            <ClienteItem
              id="02"
              nombre="Ana Perez Lopez"
              nit="3456789"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
            <ClienteItem
              id="03"
              nombre="Carlos Gomez Rodriguez"
              nit="5678901"
              onEdit={handleEditModal}
              onDelete={handleDeleteModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientesPage;
