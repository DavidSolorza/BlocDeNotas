import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList.jsx";
import NoteEditor from "./components/NoteEditor.jsx";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const isEditing = editingIndex !== null;

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleNewNote = () => {
    setEditingIndex(-1);
  };

  const handleEditNote = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleSaveNote = (newNote) => {
    const timestamp = new Date().toLocaleString(); // Fecha y hora de creación
    if (editingIndex === -1) {
      setNotes([...notes, { ...newNote, timestamp }]); // Nueva nota
    } else {
      setNotes(
        notes.map((note, i) =>
          i === editingIndex ? { ...newNote, timestamp: note.timestamp } : note
        )
      ); // Editar existente
    }
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="app-container">
      <h1>Notes</h1>
      {isEditing ? (
        <NoteEditor
          initialNote={
            editingIndex !== -1
              ? { name: notes[editingIndex].name, text: notes[editingIndex].text }
              : { name: "", text: "" }
          }
          onSave={handleSaveNote}
          onCancel={handleCancelEdit}
        />
      ) : (
        <NoteList
          notes={notes}
          onNew={handleNewNote}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      )}
    </div>
  );
};

export default App;
