// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZKjsUWAWgjbKgwkJbAJWlHbaM5sseqYs",
    authDomain: "cevicheria-21-app.firebaseapp.com",
    projectId: "cevicheria-21-app",
    storageBucket: "cevicheria-21-app.firebasestorage.app",
    messagingSenderId: "375366482093",
    appId: "1:375366482093:web:39e53188e71c2841596e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
