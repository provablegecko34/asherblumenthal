require('dotenv').config(); // For loading environment variables

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle contact form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).send('All fields are required.');
    }

    // Create a Nodemailer transporter using iCloud SMTP
    const transporter = nodemailer.createTransport({
      service: 'iCloud', // Update this to the correct SMTP service if not using iCloud
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASSWORD // Use environment variables
      }
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use environment variables
      to: process.env.EMAIL_USER,   // Send email to the same address
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email.');
  }
});

// Serve the contact page from the public directory
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'contact.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html')); // Adjust to your desired homepage
});
