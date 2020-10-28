const fs = require('fs');
const path = require('path');

function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note
};

function findById (id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result
};

function validateNote (note) {
    if (!note.noteTitle || typeof note.noteTitle !== 'string') {
        return false;
    }
    if (!note.noteText || typeof note.noteText !== 'string') {
        return false;
    }
    return true
};;

module.exports = {
    createNewNote,
    findById,
    validateNote,
}