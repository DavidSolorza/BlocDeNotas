import React from "react";
import NoteItem from "./NoteItem.jsx";

const NoteList = ({ notes, onEdit, onDelete, onNew }) => {
  return (
    <div className="note-list-container">
      <button className="btn new-btn" onClick={onNew}>New</button>
      <ul className="note-list">
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            note={note}
            onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
