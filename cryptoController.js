const crypto = require('crypto');

// Generate a key pair for the server (for demonstration purposes)
const serverKeyPair = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// const manoj = `-----BEGIN PUBLIC KEY-----
// MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjryaJlWR88JQyOLfPIDC
// MTavr6a3InUQ+k4VJCkyoc1sX9TNaXwZHCRHmYLQCrthF75k+EqRA+/YPX2xRdY+
// fTfLm2DtgPVcLTNvfyE39/zLXXjBK6QcNwbCBbWHYZH9O4ZNmweNtnqJvhDAXIsx
// UH8sHldKZpz2xuAC6uT6kka/nYj+HbvUUZn6K7jhBJvVb3Mi1nIsek4vLcPKiKVl
// 2wZBXwwQ9LSUq4laB9bro1XAxiSt9EAb5GC+iHB4Ycl+xTHACj1gBYsX7KUrvMfv
// jP5/UFDgazqMItoKVwfRWiG+/0idvFwqWQyiphVWm1CvGvJt28vvx9fOFI9mDqd2
// ewIDAQAB
// -----END PUBLIC KEY-----`

function encryptData(email, psww) {
    // You can use both plaintext and additionalData here to create the encrypted data.
    // Perform encryption logic as needed.
    const combinedData = `${email}-${psww}`;
    const encryptedData = crypto.publicEncrypt(
      {
        key: serverKeyPair.publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(combinedData)
    );
    return encryptedData.toString('base64');
  }

function decryptData(encryptedData) {
  const decryptedData = crypto.privateDecrypt(
    {
      key: serverKeyPair.privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(encryptedData, 'base64')
  );
  return decryptedData.toString();
}

module.exports = {
  encryptData,
  decryptData,
};
