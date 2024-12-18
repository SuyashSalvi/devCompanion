import dbConnect from '../../utils/dbConnect';
import Note from '../../models/Note';

export async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } else if (req.method === 'POST') {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  }
}
