import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import NotesInput from "./NotesInput";
import NotesArchiveList from "./NotesArchiveList";
import SearchInputNotes from "./SearchInputNotes";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onInputHandler = (title) => {
    const lowerCase = title.target.value.toLowerCase();
    const notesInput = this.state.notes.filter((item) =>
      item.title.toLowerCase().includes(lowerCase)
    );
    this.setState({
      notes: notesInput,
    });
  };

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((noteItem) => noteItem.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler = (id) => {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });

    this.setState({
      notes,
    });
  };

  onUndoHandler = (id) => {
    const undoNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({
      notes: undoNotes,
    });
  };

  render() {
    return (
      <>
        <div className="notes-app__header">
          <img
            src="public/images/Matcha.PNG"
            className="notes-app__image"
            alt="matcha notes"
          />
          <h1 id="notes-app__title">Matcha Notes</h1>
          <SearchInputNotes onInputHandler={this.onInputHandler} />
        </div>
        <div className="notes-app__body">
          <div className="notes-app__input">
            <h2 className="headerNotes">Add New Notes</h2>

            <NotesInput addNotes={this.onAddNoteHandler} />
          </div>
          <br />
          <div className="notes-app__list">
            <h2 className="headerNotes">Your Notes</h2>
            <br />
            <NotesList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          </div>
          <br />
          <div className="notes-app-archive__list">
            <h2 className="headerNotes">Archive Notes</h2>
            <NotesArchiveList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onUndoArchive={this.onUndoHandler}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NotesApp;
