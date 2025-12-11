// import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from './init.js';
// --- Your Firebase config ---
// const firebaseConfig = {
//   apiKey: "AIzaSyAsi0hHi3zhAUC0XEsbOTZfT3iJVoCO5XU",
//   authDomain: "my-portfolio-637e8.firebaseapp.com",
//   projectId: "my-portfolio-637e8",
//   storageBucket: "my-portfolio-637e8.firebasestorage.app",
//   messagingSenderId: "521037896961",
//   appId: "1:521037896961:web:8f5453fbbaec174531cf00"
// };

// --- Initialize Firebase ---
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// --- Posts to seed ---
const bookings = [
  {
   name: 'Mahlatse',
   surname: 'Sebola',
   gender: 'M',
   institution: 'Boston',
   paymentMethod: 'Bursary',
   phone: '076584965',
   parentsPhone: '0658964456',
   email: 'math@gmail.com',
   createdAt: serverTimestamp(),
   roomType: 'single'
  }
];

// --- Seed all bookings ---
async function seedAllBookings() {
  try {
    for (const booking of bookings) {
      const docRef = await addDoc(collection(db, "student-chambers-bookings"), booking);
      // console.log("booking added with ID:", docRef.id);
    }
    console.log("🔥 All bookings seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
  }
}


const propertyMetadata = [
  {
    name: "Student Chambers Accommodation",
    num_units: 8,
    capacity: 20,

    location: {
      coordinates: {
        lat: null,   // add real coordinates later
        lng: null,
      },
      address: {
        city: "Pretoria",
        suburb: "Pretoria North",
        street: "329 Jan Van Riebeek",
      },
    },

    contacts:{
      phone: '+271232343456',
      whatsapp: '+271232343456',
      email: 'studentChambers@gmail.com'
    },
    gallery: {
      exterior: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
      interior: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
      amenities: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"]
    },

    rooms: [
      {
        unit_number: 1,
        type: "sharing",
        capacity: 2,
        occupied: 0,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: true,
      },
      {
        unit_number: 2,
        type: "sharing",
        capacity: 2,
        occupied: 1,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
      {
        unit_number: 3,
        type: "sharing",
        capacity: 2,
        occupied: 0,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
      {
        unit_number: 4,
        type: "sharing",
        capacity: 2,
        occupied: 0,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
      {
        unit_number: 5,
        type: "sharing",
        capacity: 2,
        occupied: 1,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
      {
        unit_number: 6,
        type: "sharing",
        capacity: 2,
        occupied: 0,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: true,
      },
      {
        unit_number: 7,
        type: "single",
        capacity: 1,
        occupied: 1,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
      {
        unit_number: 8,
        type: "single",
        capacity: 1,
        occupied: 0,
        images: ["imgurl1", "imgurl1", "imgurl1", "imgurl1", "imgurl1"],
        en_suit: false,
      },
    ],
  },
];


// --- Seed metadata ---
async function seedResProperties() {
  try {
    for (const property of propertyMetadata) {
      const docRef = await addDoc(collection(db, "student-chambers-properties"), property);
      // console.log("booking added with ID:", docRef.id);
    }
    console.log("🔥 All properties seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
  }
}

// seedAllBookings();

seedResProperties();
