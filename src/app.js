const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
