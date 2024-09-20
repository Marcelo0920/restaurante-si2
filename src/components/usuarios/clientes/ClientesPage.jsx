import React, { useEffect, useState } from "react";
import ClienteItem from "./ClienteItem";
import "../../../styles/usuarios/clientes/clientespage.css";
import ClienteCreateModal from "../modales/ClienteCreateModal";
import ClienteEditModal from "../modales/ClienteEditModal";
import ClienteDeleteModal from "../modales/ClienteDeleteModal";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getClientes } from "../../../actions/clientes";

const ClientesPage = ({ getClientes, cliente: { clientes, loading } }) => {
  const [openCreateModal, setCreateOpenModal] = useState(false);
  const [openEditModal, setEditOpenModal] = useState(false);
  const [openDeleteModal, setDeleteOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClientId, setSelectedClientId] = useState(null);

  useEffect(() => {
    getClientes();
  }, [getClientes]);

  const handleCreateModal = () => setCreateOpenModal(!openCreateModal);
  const handleEditModal = (id) => {
    setSelectedClientId(id);
    setEditOpenModal(!openEditModal);
  };
  const handleDeleteModal = (id) => {
    setSelectedClientId(id);
    setDeleteOpenModal(!openDeleteModal);
  };

  const filteredClientes = clientes.filter(
    (cliente) =>
      `${cliente.nombre} ${cliente.apellido}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Cargando...</div>;
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
        clientId={selectedClientId}
      />
      <ClienteDeleteModal
        open={openDeleteModal}
        onClose={() => setDeleteOpenModal(false)}
        clientId={selectedClientId}
      />

      <div className="clientes-page">
        <h2 className="clientes-page-h2">Nuestros Clientes</h2>
        <div className="clientes-page-control-buttons">
          <input
            placeholder="Buscar Cliente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="create-button" onClick={handleCreateModal}>
            Crear
          </button>
        </div>
        <div className="clientes-list">
          <div className="clientes-grid clientes-header">
            <span>Id</span>
            <span>Nombre</span>
            <span>Email</span>
            <span>Rol</span>
            <span>Acciones</span>
          </div>

          <div className="clientes-items">
            {filteredClientes.map((cliente) => (
              <ClienteItem
                key={cliente.id}
                id={cliente.id}
                nombre={cliente.nombre}
                apellido={cliente.apellido}
                email={cliente.email}
                rol={cliente.rol}
                onEdit={handleEditModal}
                onDelete={handleDeleteModal}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ClientesPage.propTypes = {
  getClientes: PropTypes.func.isRequired,
  cliente: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cliente: state.cliente,
});

export default connect(mapStateToProps, { getClientes })(ClientesPage);
