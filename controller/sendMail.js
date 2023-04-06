const nodemailer = require("nodemailer");



const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();


    // Create SMTP server from ethereal.email (fake SMTP server)


    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'sincere.sawayn@ethereal.email',
            pass: 'TZTtvkVnWA3GdPEHp5'
        }
    })

    let info = await transporter.sendMail({
        from: '"Nodemailer test by me" <hey@test.com>', // sender address
        to: "hardik.joshi@avalontribe.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};






module.exports = sendMail;


