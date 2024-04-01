const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '', // your Hotmail email address
    pass: '' // your Hotmail password
  }
});

function handleRequest(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const requestData = JSON.parse(body);
    const email = requestData.email;

    // Create email message
    const mailOptions = {
      from: '',
      to: email,
      subject: 'Test email',
      text: 'Body of your email'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred while sending email:', error);
        res.statusCode = 500; // Internal Server Error
        res.setHeader('Content-Type', 'text/plain');
        res.end('Failed to send email');
      } else {
        console.log('Email sent:', info.response);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Email sent successfully');
      }
    });
  });
}

module.exports = handleRequest;
