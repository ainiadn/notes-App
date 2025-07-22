import React from "react";

function SearchInputNotes({ onInputHandler }) {
  return (
    <div className="searchNotes">
      <input
        type="text"
        placeholder="Search Title.."
        onChange={(id) => onInputHandler(id)}
      />
    </div>
  );
}

export default SearchInputNotes;
