const transporter = require("./configs/mail")


const sendMail = async ({from, to, subject, text, html}) => {
    await transporter.sendMail({
        from, 
        to, 
        subject, 
        text,
        html, 
    });
}

const verificationMail = async ({from, to, user}) => {
    await transporter.sendMail({
        from, 
        to, 
        subject:  `send ${user.firstName} ${user.lastName}`, 
        text:`${user.firstName} ${user.lastName} please verify your email`,
        html:`${user.firstName} ${user.lastName} please verify your email`, 
    });
}


const welcomeMail = async ({from, to, user}) => {
    await transporter.sendMail({
        from, 
        to, 
        subject:  `send ${user.firstName} ${user.lastName}`, 
        text:`${user.firstName} ${user.lastName} welcome to masai`,
        html:`${user.firstName} ${user.lastName}  welcome to masai`, 
    });
}



module.exports = {sendMail, verificationMail, welcomeMail}