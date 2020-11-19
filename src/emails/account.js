const sgMail = require('@sendgrid/mail');

// const sendGridAPIKey = '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';

// const sendGridAPIKey = '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';

// sgMail.setApiKey(sendGridAPIKey);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'sujithacharya2014@gmail.com',
//     from: 'sujithacharya2014@gmail.com',
//     subject: 'This the my first creation..!',
//     text: 'First try send mail from node.js using api sendgrid on the project Task-App'
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sujithacharya2014@gmail.com',
        subject: 'Thank for joining in. :-)',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sujithacharya2014@gmail.com',
        subject: 'Sorry to see you go...!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon...`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}