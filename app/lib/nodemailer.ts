import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.HOST_SMTP,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const mailOptions = {
  from: "",
  to: process.env.MAIL_TO,
  subject: process.env.OBJECT_MAIL,
  html: "",
};
