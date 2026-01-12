import React from "react";


function Archived({notes}) {
    return(
        <div className="Archived">
            <h1>Archivadas</h1>
            <div className="archi">
                {notes
                .filter((n) => n.archived)
                .map((note) =>(
                    <div key={note.id} className="key">
                        {note.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Archived;