import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const MESSAGES_FILE = join(__dirname, 'data', 'messages.json');

function getMessages() {
  try {
    const data = readFileSync(MESSAGES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveMessages(messages) {
  writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const messages = getMessages();
    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || null,
      message,
      created_at: new Date().toISOString(),
    };

    messages.push(newMessage);
    saveMessages(messages);

    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message.' });
  }
});

app.get('/api/contact', (req, res) => {
  try {
    const messages = getMessages();
    res.json(messages);
  } catch (error) {
    console.error('Error reading messages:', error);
    res.status(500).json({ error: 'Failed to retrieve messages.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
