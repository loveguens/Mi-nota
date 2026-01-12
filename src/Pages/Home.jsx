import React from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

function Home({notes, addNote, deleteNote, archiveNote, text, setText, color, setColor, image, setImage, search, setSearch}) {
    return(
        <div className="home">
            <h1 className="h1">Notas</h1>

            <input className="input" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />

            <NoteForm addNote={addNote} text={text} setText={setText} color={color} setColor={setColor} image={image} setImage={setImage} />

            <NoteList notes={notes.filter((n) => !n.archived)} deleteNote={deleteNote} archiveNote={archiveNote} search={search} />
        </div>
    );
}

export default Home;