const nodemailer = require("nodemailer");
module.exports = {

    sendMail(toMail) {
              
        var transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'thejatest19@gmail.com',
                pass: 'Thejatest1996@'
            }
        });
        var mailOptions = {
            from: 'thejatest19@gmail.com', // sender address
            to: toMail, // list of receivers
            subject: "Welcome! We're thrilled to have you with us", // Subject line
            text: "testing the mail", // plaintext body
            html: "htmlllllllllllll contentn to write"
        }

        transport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response);

            }
            transport.close(); // shut down the connection pool, no more messages
        });
    }
}
