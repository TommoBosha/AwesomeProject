import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOMQeimcYgOpGYmUqHQchtELsEMnYJkMY",
    authDomain: "awesomeproject-e0f2f.firebaseapp.com",
    databaseURL: "https://awesomeproject-e0f2f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "awesomeproject-e0f2f",
    storageBucket: "awesomeproject-e0f2f.appspot.com",
    messagingSenderId: "633644104565",
    appId: "1:633644104565:web:540c6a5667ba8c4087713c",
    measurementId: "G-B0MJYDS17B"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);