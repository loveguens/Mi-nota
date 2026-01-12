import React from "react";
import NoteItem from "./NoteItems";

function NoteList({notes, deleteNote, archiveNote, search}) {
    return(
        <div className="list">
            {notes
            .filter((n) => n.content.toLowerCase().includes(search.toLowerCase()))
            .map((note) =>(
                <NoteItem 
                key={note.id} 
                note={note} 
                deleteNote={deleteNote} 
                archiveNote={archiveNote} />
            ))}
        </div>
    );
}


export default NoteList;