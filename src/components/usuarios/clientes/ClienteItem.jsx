import React from "react";
import "../../../styles/usuarios/clientes/clienteitem.css";

const ClienteItem = ({
  id,
  nombre,
  apellido,
  email,
  rol,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="clientes-grid cliente-item">
      <span>{id}</span>
      <span>{`${nombre} ${apellido}`}</span>
      <span>{email}</span>
      <span>{rol[0].nombre.replace("ROLE_", "")}</span>
      <div>
        <button className="edit-button" onClick={() => onEdit(id)}>
          Editar
        </button>
        <button className="delete-button" onClick={() => onDelete(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ClienteItem;
