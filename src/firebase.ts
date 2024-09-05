// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFjBLHy0ppEiqCnzp5RTWGzs51OdDbqrE",
  authDomain: "weddingcard-prac.firebaseapp.com",
  projectId: "weddingcard-prac",
  storageBucket: "weddingcard-prac.appspot.com",
  messagingSenderId: "588328404745",
  appId: "1:588328404745:web:3a1a7584f2783d174ff5d8",
  measurementId: "G-8QB93ZK9WG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp)

export async function addData(name : string, className: string, participants: number) {

  try {
    const docRef = await addDoc(collection(db, 'rsvp'), {
      classification: className,
      name: name,
      numOfParticipants: participants,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}