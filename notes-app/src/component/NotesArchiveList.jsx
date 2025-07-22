import React from "react";
import NotesItem from "./NotesItem";

function NotesArchiveList({ notes, onDelete, onUndoArchive }) {
  const filteredNotes = notes.filter((note) => note.archived === true);
  return (
    <div className="notes-archive_list">
      {filteredNotes.length == 0
        ? "Tidak ada catatan"
        : filteredNotes.map((noteItem) => (
            <NotesItem
              key={noteItem.id}
              id={noteItem.id}
              onDelete={onDelete}
              onUndoArchive={onUndoArchive}
              {...noteItem}
            />
          ))}
    </div>
  );
}

export default NotesArchiveList;
