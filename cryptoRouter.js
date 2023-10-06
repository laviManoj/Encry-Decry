const express = require('express');
const router = express.Router();
const cryptoController = require('./cryptoController');

// Encryption endpoint
router.post('/encrypt', (req, res) => {
    const { email, psww } = req.body;
    const encryptedData = cryptoController.encryptData(email, psww);
    res.json({ encryptedData });
  });
  

// Decryption endpoint
router.post('/decrypt', (req, res) => {
  const encryptedData = req.body.encryptedData;
  const decryptedData = cryptoController.decryptData(encryptedData);
  res.json({ decryptedData });
});

module.exports = router;
module.exporfs