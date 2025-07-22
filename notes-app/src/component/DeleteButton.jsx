import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="notes-item_delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
