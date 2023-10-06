const crypto = require('crypto');

// Generate a key pair for the server (for demonstration purposes)
const serverKeyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Array of plaintext values to be encrypted
const plaintextArray = [
  'Hello, World!',
  'This is a secret message.',
  'Another piece of data to encrypt.',
];

// Function to encrypt plaintext data
function encryptData(plaintext) {
  const encryptedData = crypto.publicEncrypt(
    {
      key: serverKeyPair.publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(plaintext)
  );
  console.log(encryptedData);
  return encryptedData.toString('base64');
}

// Encrypt each plaintext value
const encryptedDataArray = plaintextArray.map(encryptData);

console.log('Encrypted Data Array:');
console.log(encryptedDataArray);
