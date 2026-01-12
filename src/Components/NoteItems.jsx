import React from "react";


function NoteItem({ note, deleteNote, archiveNote }) {
  return (
    <div className="note-item">
      <p>{note.content}</p>

      <div className="actions">
        <button onClick={() => deleteNote(note.id)}>Eliminar</button>
        <button onClick={() => archiveNote(note.id)}>Archivar</button>
      </div>
    </div>
  );
}


export default NoteItem;