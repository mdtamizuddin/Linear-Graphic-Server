const nodemailer = require('nodemailer')
const express = require('express');
const { getMaxListeners } = require('../Schemas/headersSchema');
const router = express.Router()

router.post('/contact', (req, res) => {
    const data = req.body
    async function main() {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tasrif@lineargraphic.net',
                pass: process.env.NODEMAILER_PASS,
            },
        });
        const info = await transporter.sendMail({
            from: 'tasrif@lineargraphic.net',
            to: 'tasrif@lineargraphic.net',
            subject: data.subject,
            text: "Linear Graphic Tasrif ✔",
            html: `
            </div>
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
              <h5 style="color: rgba(7, 0, 70, 0.89); font-size: 15px;">Name: ${data.name}</h5>
              <h5 style="color: rgba(7, 0, 70, 0.89); font-size: 14px;">Recived A Email From ${data.email}</h5>
              <p>${data.message}</p>
              <img style="width: 200px;" src='${data.image}' alt="">
              <a href="${data.image}">${data.image}</a>
            </div>
              `,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
    res.status(200).send({ message: "Email Send" })
})

module.exports = router