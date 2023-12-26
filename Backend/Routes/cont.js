const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contact');
const { validationResult, body } = require('express-validator');



// api to add contact information of user 

router.post('/addcontact', async (req, res) => {

    const { name, email, subject, description } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        for (let i = 0; i < req.body.length; i++) {
            let contactinfo = new Contact({
                name: req.body[i].name,
                email: req.body[i].email,
                subject: req.body[i].subject,
                message: req.body[i].message,
            })
            await contactinfo.save()
            res.status(200).json({ success: "Success" });
            res.status(contactinfo);
        }
    }
    catch (error) {
        res.status(600).json({ error: "Cant add user information Sorry" });
    }
})

module.exports = router
