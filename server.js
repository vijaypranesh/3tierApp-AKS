// Backend with Node.js and Express.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Note = require('./models/note');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://10.0.0.4:27017/notesdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes

app.post('/api/notes', async (req, res) => {
    try {
        const { title, content } = req.body; 
        const note = new Note({ title, content });
        await note.save();
	res.status(201).json(note);

    } catch (err) {
	console.error(err);
	res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        // Convert Mongoose documents to plain JavaScript objects
        const plainNotes = notes.map(note => note.toObject({ getters: true }));
        res.json(plainNotes);
    } catch (err) {
        console.error(err);
	res.status(500).json({ message: err.message });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

