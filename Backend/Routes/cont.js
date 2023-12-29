const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/addcontact', async (req, res) => {

    const { name, email, subject, description } = req.body;

    try {
        for (let i = 0; i < req.body.length; i++) {
            let contactinfo = new Contact({
                name: req.body[i].name,
                email: req.body[i].email,
                subject: req.body[i].subject,
                message: req.body[i].message,
            })
            await contactinfo.save()
            res.status(200).json({ success: "Success" });
        }
    }
    catch (error) {
        res.status(600).json({ error: "Cant add user information Sorry" });
    }
})
module.exports = router
