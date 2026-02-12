// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcI0CyWAcfBYdkBquCgj9RWSdpTrqjj6g",
    authDomain: "iee-genaro-herrera.firebaseapp.com",
    projectId: "iee-genaro-herrera",
    storageBucket: "iee-genaro-herrera.firebasestorage.app",
    messagingSenderId: "380822703142",
    appId: "1:380822703142:web:1834c7a730435ee01f2ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
