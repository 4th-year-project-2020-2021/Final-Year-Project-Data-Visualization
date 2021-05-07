const functions = require('firebase-functions');
const admin = require("firebase-admin")

admin.initializeApp();
const db = admin.firestore()

exports.onCreate = functions.firestore.document('TestCollection/{docId}').onCreate(async (snapshot)=>{
    const data = snapshot.data()
    const docId = snapshot.id

    const copyRef = db.collection('Copies').doc(docId)
    await copyRef.set(data)

})

// Referances
// Firebase Trigger Functions Testing with JEST and Emulators
// https://dev.to/ssagga/firebase-trigger-functions-testing-with-jest-and-emulators-5dc2