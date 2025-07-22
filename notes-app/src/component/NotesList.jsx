import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }) {
  const newNotes = notes.filter((note) => note.archived === false);
  return (
    <div className="notes-list">
      {newNotes.length == 0
        ? "Tidak Ada catatan"
        : newNotes.map((noteItem) => (
            <NotesItem
              key={noteItem.id}
              id={noteItem.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...noteItem}
            />
          ))}
    </div>
  );
}

export default NotesList;
