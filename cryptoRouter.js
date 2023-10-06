const express = require('express');
const router = express.Router();
const cryptoController = require('./cryptoController');

// Encryption endpoint
router.post('/encrypt', (req, res) => {
  const { email, psww } = req.query; // Access data as query parameters
  if (!email || !psww) {
    return res.status(400).json({ error: 'Missing email or psww parameters.' });
  }

  const encryptedData = cryptoController.encryptData(email, psww);
  res.json({ encryptedData });
  console.log("🚀 ~ file: cryptoRouter.js:13 ~ router.post ~ encryptedData:", encryptedData)
});

  

// Decryption endpoint
router.post('/decrypt', (req, res) => {
  const encryptedData = req.body.encryptedData;
  const decryptedData = cryptoController.decryptData(encryptedData);
  res.json({ decryptedData });
  console.log("🚀 ~ file: cryptoRouter.js:22 ~ router.post ~ decryptedData:", decryptedData)
  
});

module.exports = router;
module.exporfs