import React from "react";

const maxLengh = 50;
class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  };

  onNoteChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmitEventHandlere = (event) => {
    event.preventDefault();
    this.props.addNotes(this.state);
  };

  onCount = () => {
    const maxCharCount = maxLengh - this.state.title.length;
    return maxCharCount;
  };

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandlere}>
        <p className="input-character">Sisa Karakter: {this.onCount()}</p>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className="notes-input__title"
          maxLength={maxLengh}
          required
        />
        <textarea
          name="notes"
          id=""
          cols="30"
          rows="10"
          placeholder="Note"
          value={this.state.body}
          onChange={this.onNoteChangeEventHandler}
          className="notes-input__note"
          required
        ></textarea>

        <button className="notes-button__input" type="submit">
          Add
        </button>
      </form>
    );
  }
}
export default NotesInput;
