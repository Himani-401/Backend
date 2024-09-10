const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }

  users.push({ username, password });
  res.json({ success: true, message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
