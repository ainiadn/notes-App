import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemBody({ title, body, date }) {
  const formatedDate = showFormattedDate(date);
  return (
    <div className="notes-item__body">
      <h3 className="notes-item__title">{title}</h3>
      <p className="notes-item__date">{formatedDate}</p>
      <p className="notes-item__content">{body}</p>
    </div>
  );
}

export default NotesItemBody;
