// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCEgrHCkNxOTEQmWW5QTPB89gDdYkTfigo",
    authDomain: "ai-food-tracker-a0129.firebaseapp.com",
    projectId: "ai-food-tracker-a0129",
    storageBucket: "ai-food-tracker-a0129.firebasestorage.app",
    messagingSenderId: "1088620429100",
    appId: "1:1088620429100:web:2e2ab5054e766a396d7689",
    measurementId: "G-3QWNB1J2WK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = GoogleAuthProvider;
