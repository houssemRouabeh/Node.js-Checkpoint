require("dotenv").config();
const nodeMail = require("nodemailer");
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const emailSender = (
  service,
  senderMail,
  senderPwd,
  recipient,
  mailSubject,
  mailContent
) => {
  const transporter = nodeMail.createTransport({
    service: service,
    auth: {
      user: senderMail, // sender email
      pass: senderPwd, // sender password
    },
  });
  const mailOptions = {
    from: senderMail,
    to: recipient,
    subject: mailSubject,
    text: mailContent,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email successfully sent: " + info.response);
    }
  });
};

emailSender(
  "gmail",
  email,
  password,
  email,
  "test from node",
  "test email send from node"
);
