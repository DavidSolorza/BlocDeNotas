import React from "react";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <li className="note-item">
      <div className="note-content">
        <h3 className="note-name">{note.name}</h3>
        <p className="note-text">{note.text}</p>
        <small className="note-timestamp">{note.timestamp}</small>
      </div>
      <div className="note-buttons">
        <button className="btn edit-btn" onClick={onEdit}>Modify</button>
        <button className="btn delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default NoteItem;
