import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
  onUndoArchive,
}) {
  return (
    <div className="notes-item">
      <div className="notes-item__body">
        <NotesItemBody title={title} body={body} date={createdAt} />
      </div>
      <div className="notes-item__button">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton
          id={id}
          onArchive={onArchive}
          archived={archived}
          onUndoArchive={onUndoArchive}
        />
      </div>
    </div>
  );
}

export default NotesItem;
