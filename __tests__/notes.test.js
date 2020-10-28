const fs = require('fs');
const {
    createNewNote,
    findById,
    validateNote,
} = require('../lib/notes');
const { notes } = require('../data/notes.json');

jest.mock('fs');

test('create a new note object', () => {
    const note = createNewNote(
        { noteTitle: "New Note", noteText: "Test New Note" },
        notes
    );
    
    expect(note.noteTitle).toBe('New Note');
    expect(note.noteText).toBe('Test New Note');
});

test('filters by id', () => {
    const startingNotes = [
        {
            id: "0",
            noteTitle: "Test Title",
            noteText: "Test Text"
        },
        {
            id: "1",
            noteTitle: "TITLE",
            noteText: "This is a test"
        },
    ];

    const result = findById("1", startingNotes);

    expect(result.noteText).toBe("This is a test");
});

test('validates note format', () => {
    const note = {
        id: "3",
        noteTitle: "Valid Note",
        noteText: "This is a valid Note", 
    };

    const invalidNote = {
        id: "4",
        noteTitle: "Invalid Note",
    };

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});
