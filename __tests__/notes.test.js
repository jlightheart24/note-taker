const fs = require('fs');
const {
    createNewNote,
    findById,
    validateNote,
    deleteNote,
} = require('../lib/notes');
const { notes } = require('../data/notes.json');

jest.mock('fs');

test('create a new note object', () => {
    const note = createNewNote(
        { title: "New Note", text: "Test New Note" },
        notes
    );
    
    expect(note.title).toBe('New Note');
    expect(note.text).toBe('Test New Note');
});

test('filters by id', () => {
    const startingNotes = [
        {
            id: "0",
            title: "Test Title",
            text: "Test Text"
        },
        {
            id: "1",
            title: "TITLE",
            text: "This is a test"
        },
    ];

    const result = findById("1", startingNotes);

    expect(result.text).toBe("This is a test");
});

test('validates note format', () => {
    const note = {
        id: "3",
        title: "Valid Note",
        text: "This is a valid Note", 
    };

    const invalidNote = {
        id: "4",
        title: "Invalid Note",
    };

    const invalidNoteTitle = {
        id: "4",
        text: "Invalid Note",
    };

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);
    const result3 = validateNote(invalidNoteTitle);

    expect(result).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
});

test('deletes the note', () => {
    let notes =
        [
            {
              "id": "0",
              "title": "Test Title",
              "text": "Test Text"
            },
            {
              "id": "1",
              "title": "TITLE",
              "text": "This is a test"
            },
            {
              "title": "Post Note",
              "text": "This is to test POST",
              "id": "2"
            },
            {
              "title": "Does this work now",
              "text": "yes",
              "id": "3"
            }
        ];

    notes = deleteNote(notes, "3");

    expect(notes.length).toBe(3);
});
