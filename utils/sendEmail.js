const nodemailer = require('nodemailer');    //(We are going to use NodeMailer package.This package is going to make our life easier to send messages from our node.js applications. [Inastall:-  npm i nodemailer.])

const sendEmail = async (to,messageConetnt)=>{     //(This is not going to take req, res but instead it's going to take the email that we want to send the message "to" and then the actual messageContent. )
    try {
        // connect with smtp
        //create transporter       //(Transporter is an object that is going to use to specify the email provider SMTP(Simple mail transfer protocol) and it contains other configurations like host, port and secure in our login credentials)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',       //(We are going to use Gmail account so, it's going to be "smtp.gmail.com" )
            port: 587,       //(These are just configuration from nodeMailer)
            secure: false,
            auth: {
                user:"anonymousmiss316@gmail.com",
                pass:"yejbvhsbkoanmfex"  //(Password of your gmail account but this password is not same as password you use to log in into your gmail account.)
            }
        });
        //message obj
        const message = {
            to,        //(Means that email that you want to send to.)
            subject: 'New Message from Node Mailer App',
            html: `
                <h3>You have recieved a new message from Node Mailer App</h3>
                <p>${messageConetnt}</p>`,        //(Actual message I'll put it inside P tag.)
        };
        //send the email
        const info = await transporter.sendMail(message);        //(We have a method called "sendMail" and I'll pass in the message.)
        console.log('Message sent', info.messageId);


    } catch (err) {
        console.log(err);
        throw new Error("Email could not be sent");
    }
};

module.exports = sendEmail;