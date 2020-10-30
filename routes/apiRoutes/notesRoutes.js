const { createNewNote, findById, validateNote, deleteNote } = require('../../lib/notes');
let { notes } = require('../../data/notes.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
        if (result) {
            res.json(result);
        } else {
            res.send(404);
        }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
        if (result) {
            notes = deleteNote(notes, req.params.id)
            res.json(result);
        } else {
            res.send(404);
        }
});

module.exports = router;