const {db} = require('./firebase');
const Client = require('./client');


let propertyCache = null;
async function loadPropertyData(){
    if(propertyCache) return propertyCache;

    console.log("Loading property data from Firestore...");

    const doc = await db
        .collection('student-chambers-properties')
        .doc('vNpiVKf4TLgWBC7NUpL0')
        .get();

    if (!doc.exists) throw new Error("Property not found");

    const client = new Client({
        data: { id: doc.id, ...doc.data() }
    });

    propertyCache = {
        raw: doc.data(),
        sanitized: {
            rooms: client.units,
            location: client.location,
            contacts: client.contacts, // when you add this
            gallery: client.gallery,   // if rooms contain images
        }
    };

    return propertyCache;
}


module.exports =  {loadPropertyData};