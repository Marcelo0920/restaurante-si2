import "../../../styles/usuarios/clientes/clienteitem.css";

const ClienteItem = ({ id, nombre, nit, onEdit, onDelete }) => {
  return (
    <div className="clientes-grid cliente-item">
      <span>{id}</span>
      <span>{nombre}</span>
      <span>{nit}</span>
      <div>
        <button className="edit-button" onClick={onEdit}>
          Editar
        </button>
        <button className="delete-button" onClick={onDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ClienteItem;
