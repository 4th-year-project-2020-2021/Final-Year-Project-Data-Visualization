/**
 * @author Jina Kim
 *
 * Firebase Trigger Functions Testing with JEST and Emulators
 * 
 */


// Referances
// https://dev.to/ssagga/firebase-trigger-functions-testing-with-jest-and-emulators-5dc2
// https://jestjs.io/docs/using-matchers

const firebase = require('@firebase/testing') //<---this should be on top!
const admin = require('firebase-admin')

const projectId = "projectauth-466ef"
process.env.GCLOUD_PROJECT = projectId
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8084";
let app = admin.initializeApp({projectId}) //so that you wouldn't need any permission to write,delete or update
let db = firebase.firestore(app)  //firestore instance which is going to be calling be firebase


beforeAll(async ()=>{
    
    //jest.setTimeout(30000);

    await firebase.clearFirestoreData({projectId});
})


// The timeout needs to be shorter than the default timeout, which is 5000!

// When Document written to '/TestCollection/{DocumentId}' , trigger function to copy it to '/Copies/{DocumentId}
test("Expect to find a copy in 'Copies' Collection", async ()=>{
    const testDoc = {
        name: 'Sam',
        age: 21,
        city: 'Galway'
    }

    const ref = db.collection('TestCollection').doc()
    await ref.set(testDoc)

    //jest.setTimeout(30000);
    
    const copyId = ref.id

    const copyRef = db.collection('Copies').doc(copyId)

    //The timeout problem could occur when either the network is slow or many network calls are made using await
    await new Promise((r)=>setTimeout(r,6000))

    const copyDoc = await copyRef.get()

    expect(copyDoc.data()).toStrictEqual(testDoc)
})

// How to test
// In functions -> npm test
// Firebase emulators:start


