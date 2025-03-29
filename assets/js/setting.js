const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Email Notification
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'user-email@example.com',
    subject: 'Challan Created',
    text: 'Your challan has been successfully created.'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

// SMS Notification
const accountSid = 'your-twilio-account-sid';
const authToken = 'your-twilio-auth-token';
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Your challan has been successfully created.',
    to: '+1234567890',  // Text this number
    from: '+0987654321' // From a valid Twilio number
}).then((message) => console.log(message.sid));





