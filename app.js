const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS if the frontend is on a different domain
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handle the submit-contact POST request
app.post('/submit-contact', (req, res) => {
  // Extract data from the request body
  const { name, email, message } = req.body;

  // You can add logic to store this information in a database or send an email
  console.log(`Received contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

  // Respond with a success message
  res.json({ status: 'success', message: 'Thank you for contacting us!' });
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'src/public')));

// Route to serve the index.html file as the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'index.js'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/about-us.html'));
});
  
app.get('/app-link', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'app-link.html'));
});

