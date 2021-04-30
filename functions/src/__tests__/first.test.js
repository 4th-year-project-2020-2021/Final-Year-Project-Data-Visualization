//test("Should be 1", ()=>{
//    expect(1).toBe(1)
//})
const firebase = require('@firebase/testing') //<---this should be on top!
const admin = require('firebase-admin')

//const projectId = "testfirebaseemulators"
const projectId = "projectauth-466ef"
process.env.GCLOUD_PROJECT = projectId
process.env.FIRESTORE_EMULATOR_HOST = "localhost:8082";
let app = admin.initializeApp({projectId}) //so that you wouldn't need any permission to write,delete or update
let db = firebase.firestore(app)  //firestore instance which is going to be calling be firebase


beforeAll(async ()=>{
    await firebase.clearFirestoreData({projectId});
})

//test("Should be true", ()=>{
//    expect(1).toBe(1)
//})

// When Document written to '/TestCollection/{DocumentId}' , trigger function to copy it to '/Copies/{DocumentId}
test("Expect to find a copy in 'Copies' Collection", async ()=>{
    const testDoc = {
        name: 'Samer',
        age: 21,
        city: 'Riyadh'
    }

    const ref = db.collection('TestCollection').doc()
    await ref.set(testDoc)
    //jest.setTimeout(30000);
    
    const copyId = ref.id

    const copyRef = db.collection('Copies').doc(copyId)

    await new Promise((r)=>setTimeout(r,30000))

    const copyDoc = await copyRef.get()

    expect(copyDoc.data()).toStrictEqual(testDoc)
})