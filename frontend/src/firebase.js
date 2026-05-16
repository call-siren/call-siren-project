// firebase.js

import { initializeApp } from "firebase/app"

import {
  getFirestore
} from "firebase/firestore"

import {
  getAuth
} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyB-SdxG2QkwZ8awpyWG4-429Sm3dEPpRkI",

  authDomain: "call-siren-32d90.firebaseapp.com",

  projectId: "call-siren-32d90",

  storageBucket: "call-siren-32d90.firebasestorage.app",

  messagingSenderId: "624653082998",

  appId: "1:624653082998:web:af037c24848657b3735a57",

  measurementId: "G-D5954MEGW3"

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app)

export default app