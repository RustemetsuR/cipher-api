const router = require("express").Router();
const Vigenere = require('caesar-salad').Vigenere;

const password = 'testPassword';

router.post("/encode", (req, res) => {
    if (req.body.password === password) {
        res.send({
            text: Vigenere.Cipher('password').crypt(req.body.text),
        });
    } else {
        res.send({
            text: 'Wrong Password!',
        });
    };
});

router.post("/decode", (req, res) => {
    if (req.body.password === password) {
        res.send({
            text: Vigenere.Decipher('password').crypt(req.body.text),
        });
    } else {
        res.send({
            text: 'Wrong Password!',
        });
    };
});


module.exports = router;