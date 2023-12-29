const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/addcontact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const info = new Contact({
        name,
        email,
        subject,
        message,
    })
    try {
        await info.save();
        res.status(200).json({ success: "Success" });
    }
    catch (error) {
        res.status(600).json({ error: "Cant add user information Sorry" });
    }
})
module.exports = router
