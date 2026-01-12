import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Archived from "./Pages/Archived";
import Home from "./Pages/Home";


 function App() {
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [image, setImage] = useState(null);
    const [search, setSearch] = useState("");
    const [dark, setDark] = useState(false);

    useEffect (() => {
       localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (!text.trim()) return;

        const newNote ={
            id: Date.now(),
            content:text,
            color,
            image,
            archived:false,
            date:new Date().toLocaleString(),
        };

        setNotes([...notes, newNote]);
        setText("");
        setColor("#ffffff");
        setImage(null);
    };

    const deleteNote =(id) =>
        setNotes(notes.filter((note) => note.id !== id));

    const archiveNote =(id) =>
        setNotes(
            notes.map((n) =>
            n.id === id ? {...n, archived: true} : n
        )
        );

    return(
        <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"} >
            <Router>
                <nav className="nav flex gap-4 p-4">
                    <Link to="/">Notas</Link>
                    <Link to="/archived">Achivadas</Link>

                <button onClick={() => setDark(!dark)}>
                    {dark ? "Modo Claro" : "Modo Oscuro"}
                </button>
                </nav>

                <Router>
                    <Router path="/"
                    element={
                        <Home
                        notes={notes}
                        addNote={addNote}
                        deleteNote={deleteNote}
                        archiveNote={archiveNote}
                        text={text}
                        setText={setText}
                        color={color}
                        setColor={setColor}
                        image={image}
                        setImage={setImage}
                        search={search}
                        setSearch={setSearch} />
                    } >

                    </Router>
                    <Router path="/archived" element= {<Archived notes={notes} />} ></Router>
                </Router>
            </Router>

        </div>
    );
}



export default App;
