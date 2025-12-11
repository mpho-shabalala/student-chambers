const express  =  require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const shortid = require('shortid');
const app = express();
// const fetch = require('node-fetch');
const {admin, db} = require('./firebase.js');
const functions = require('firebase-functions');
// require("dotenv").config();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {loadPropertyData} = require('./loadPropertyData.js')



// ----- ROOMS -----
app.get('/api/rooms', async (req, res) => {
    try {
        const property = await loadPropertyData();
        res.status(200).json({
          status: 'success',
          message: 'Rooms found',
          statusCode: 'SUCCESS',
          data: property.sanitized.rooms
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
          status: 'fail',
          message: 'Failed to fetch rooms',
        statusCode: 'FAIL' });
    }
});

// ----- LOCATION -----
app.get('/api/location', async (req, res) => {
  try {
        const property = await loadPropertyData();
        res.status(200).json({
          status: 'success',
          message: 'Location found',
          statusCode: 'SUCCESS',
           data: property.sanitized.location
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
          status: 'fail',
          message: 'Failed to fetch location',
        statusCode: 'FAIL' });
    }
});

// ----- GALLERY -----
app.get('/api/gallery', async (req, res) => {
   try {
        const property = await loadPropertyData();
        // const gallery = property.sanitized.rooms.flatMap(room => room.images);
        res.status(200).json({
          status: 'success',
          message: 'Gallery found',
          statusCode: 'SUCCESS',
           data: property.sanitized.gallery
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
          status: 'fail',
          message: 'Failed to fetch Gallery',
        statusCode: 'FAIL' });
    }
   
});

// ----- CONTACTS -----
app.get('/api/contacts', async (req, res) => {
  try {
        const property = await loadPropertyData();
        res.status(200).json({
          status: 'success',
          message: 'Contacts found',
          statusCode: 'SUCCESS',
           data: property.sanitized.contacts
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
          status: 'fail',
          message: 'Failed to fetch contacts',
        statusCode: 'FAIL' });
    }
});

// ----- PROPERTY INFO -----
app.get('/api/property', async (req, res) => {
  try {
        const propertyData = await loadPropertyData();
        const clientClass = new (require('./client.js'))({ data: propertyData.raw, id: propertyData.raw.id });
        res.status(200).json({
          status: 'success',
          message: 'property data found',
          statusCode: 'SUCCESS',
           data: clientClass.property
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ 
          status: 'fail',
          message: 'Failed to fetch property data',
          statusCode: 'FAIL' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App listening on port 5000')
})

// exports.api = functions.https.onRequest(app); 