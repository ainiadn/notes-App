import React from "react";

function ArchiveButton({ id, onArchive, archived, onUndoArchive }) {
  const onClick = (id) => {
    if (archived) {
      return onUndoArchive(id);
    }
    onArchive(id);
  };
  return (
    <button className="notes-item_archive" onClick={() => onClick(id)}>
      {archived ? "Undo" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
