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
                user: 'mdtomiz.official@gmail.com',
                pass: process.env.NODEMAILER_PASS,
            },
        });
        const info = await transporter.sendMail({
            from: 'mdtomiz.official@gmail.com',
            to: 'tamizrabbi@gmail.com',
            subject: "Linear Graphic✔",
            text: "Linear Graphic ✔",
            html: `
            </div>
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
              <h5 style="color: rgba(7, 0, 70, 0.89); font-size: 14px;">Recived A Email From ${data.email}</h5>
              <p>{data.message}</p>
              <img style="width: 200px;" src='${data.image}' alt="">
            </div>
              `,
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);

})

module.exports = router