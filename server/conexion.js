import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCxVA_i4HfufkeTLRXBPoESbsRgDnl79g",

    authDomain: "boutique-2555c.firebaseapp.com",

    projectId: "boutique-2555c",

    storageBucket: "boutique-2555c.appspot.com",

    messagingSenderId: "759952347664",

    appId: "1:759952347664:web:37bd4d4764fbd5abcb3095"

};

// Initialize Firebase
export const Boutiquefb = initializeApp(firebaseConfig);
export const db = getFirestore(Boutiquefb);