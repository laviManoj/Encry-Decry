const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Generate a key pair for the server (for demonstration purposes)
const serverKeyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Encryption endpoint
app.post('/encrypt', (req, res) => {
  const plaintext = req.body.plaintext; // Get plaintext from request body

  // Encrypt using the server's public key
  const encryptedData = crypto.publicEncrypt(
    {
      key: serverKeyPair.publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(plaintext)
  );

  res.json({ encryptedData: encryptedData.toString('base64') });
});

// Decryption endpoint
app.post('/decrypt', (req, res) => {
  const encryptedData = req.body.encryptedData; // Get encrypted data from request body

  // Decrypt using the server's private key
  const decryptedData = crypto.privateDecrypt(
    {
      key: serverKeyPair.privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(encryptedData, 'base64')
  );

  res.json({ decryptedData: decryptedData.toString() });
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
