const nodemailer = require("nodemailer")


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    user: "cb88228d09d549", // generated ethereal user
    pass: "6d0b0e3331dc14", // generated ethereal password
    },
});