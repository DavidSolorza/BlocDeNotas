import React, { useState } from "react";

const NoteEditor = ({ initialNote = { name: "", text: "" }, onSave, onCancel }) => {
  const [name, setName] = useState(initialNote.name);
  const [text, setText] = useState(initialNote.text);

  const handleSave = () => {
    if (name.trim() && text.trim()) {
      onSave({ name, text });
    }
  };

  return (
    <div className="note-editor">
      <input
        className="editor-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        className="editor-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note..."
      />
      <div className="editor-buttons">
        <button className="btn save-btn" onClick={handleSave}>Save</button>
        <button className="btn cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NoteEditor;
