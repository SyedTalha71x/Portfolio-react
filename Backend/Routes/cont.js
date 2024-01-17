const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');

router.post('/addcontact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const info = new Contact({
            name,
            email,
            subject,
            message,
        });
        const saveinfo = await info.save();
        res.status(200).json({ success: "Success", saveinfo });
    }
    catch (error) {
        res.status(600).json({ error: "Cant add user information Sorry" });
    }
})
module.exports = router
