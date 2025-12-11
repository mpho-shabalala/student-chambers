const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://my-portfolio-637e8-default-rtdb.firebaseio.com", // optional if using Realtime DB
});

// Firestore reference
const db = admin.firestore();

// Export both admin SDK and db for reuse
module.exports = { admin, db };
