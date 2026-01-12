import React from "react";

function NoteForm({addNote, text, setText, color, setColor, image, setImage}){
    return(
        <div className="main">
            <textarea
            className="container"
            placeholder="Escribe una nota..."
            value={text}
            onChange={(e) =>setText(e.target.value)}
            />

            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <input type="file"
            accept="image/*"
            onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader =new FileReader();
                    reader.onload=() => setImage(reader.result);
                    reader.readAsDataURL(file);
                }
            } } 
            />

            <button onClick={addNote} className="button2">Agregar Nota</button>


        </div>
    );
}

export default NoteForm;