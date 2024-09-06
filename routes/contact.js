const express = require('express');
const router = express.Router();

// GET route to display the contact form
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// POST route to handle form submission
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the form data to the console (you can process it further here)
  console.log(`Received message from ${name} (${email}): ${message}`);

  // For now, redirect back to the contact page with a success message
  res.send(`<h2>Thank you, ${name}! Your message has been received.</h2>`);
});

module.exports = router;

