const PersonalItem = ({ id, nombre, codigo, area, rol, onEdit, onDelete }) => {
  return (
    <div className="personal-grid cliente-item">
      <span>{id}</span>
      <span>{nombre}</span>
      <span>{codigo}</span>
      <span>{area}</span>
      <span>{rol}</span>
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

export default PersonalItem;
